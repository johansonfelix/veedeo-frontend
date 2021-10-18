import React, { useContext } from "react";

import { SocketContext } from "../Context";

const Notifications = () => {
  const { callAccepted, preparingCall, callMade, to } =
    useContext(SocketContext);

  return (
    <>
      {preparingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2 align="center">Preparing call....</h2>
        </div>
      )}

      {callMade && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2 align="center" style={{ color: "#0F62E4" }}>
            Calling {to}...
          </h2>
        </div>
      )}
    </>
  );
};

export default Notifications;
