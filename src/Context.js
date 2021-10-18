import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io("https://veedeo-server.herokuapp.com/");
// const socket = io('https://warm-wildwood-81069.herokuapp.com');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [userStart, setUserStart] = useState(false);
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");
  const [preparingCall, setPreparingCall] = useState(false);
  const [callMade, setCallMade] = useState(false);
  const [to, setTo] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    socket.on("me", (id) => setMe(id));

    socket.on("receiveCall", ({ from, name, signal }) => {
      setCall({
        isReceivingCall: true,
        isMakingCall: false,
        peerID: from,
        name: name,
        signal: signal,
      });
    });

    socket.on("refresh", () => {
      setCallEnded(true);
      setName("");
      setUserStart(false);
      window.location.reload();
    });
  }, []);

  useEffect(() => {
    userStart &&
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          setStream(currentStream);

          myVideo.current.srcObject = currentStream;
        });
  }, [userStart]);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", {
        signal: data,
        peerID: call.peerID,
        from: me,
        name: name,
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", { peerID: id, signalData: data, from: me, name });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on("callMade", (userToCall) => {
      setPreparingCall(false);
      setCallMade(true);
      setTo(userToCall);
      console.log("calling: ", userToCall);
    });

    socket.on("callAccepted", ({ signal, peerID, name }) => {
      console.log("call accepted");
      setCallAccepted(true);
      setCall({
        isReceivingCall: false,
        isMakingCall: true,
        peerID: peerID,
        name: name,
        signal: signal,
      });
      console.log("name: ", name);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = (peerID) => {
    socket.emit("end", peerID);

    setCallEnded(true);
    setName("");
    setUserStart(false);
    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        setStream,
        setUserStart,
        userStart,
        preparingCall,
        setPreparingCall,
        callMade,
        setCallMade,
        to,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
