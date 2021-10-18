import React, { useContext } from "react";
import { SocketContext } from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { CallEnd } from "@material-ui/icons";
import { Options, Notifications, CallingDialog } from "../components";

const useStyles = makeStyles((theme) => ({
  homepage: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  gridContainer: {
    margin: "0 5%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  mainHeading: {
    fontSize: "3rem",
  },
  headingText: {
    color: "rgb(167, 169, 190)",
    marginTop: "10px",
    lineHeight: "1.8",
  },
  box: {
    inlineSize: "450px",
    overflowWrap: "break-word",
  },

  video: {
    width: "500px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  paper: {
    padding: "10px",
    margin: "10px",
    border: "none",
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    borderRadius: "5px",
    backgroundColor: "rgb(30, 30, 30, 0.5)",
    color: "white",
    width: "500px",
  },
  notificationButtons: {
    marginRight: "5px",
    marginTop: "10px",
  },
}));

const Homepage = () => {
  const {
    myVideo,
    stream,
    call,
    callAccepted,
    callEnded,
    userVideo,
    name,
    leaveCall,
  } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <div className={classes.homepage}>
      {call.isReceivingCall && !callAccepted && <CallingDialog />}

      <Grid
        container
        className={`${classes.gridContainer} animate__animated animate__zoomIn`}
        spacing={2}
        style={{ position: "relative" }}
      >
        {!callAccepted && (
          <Grid item xs={12} md={6}>
            <div className={classes.box}>
              <h1 className={classes.mainHeading}>
                Connect with the important people in your life.
              </h1>
              <p className={classes.headingText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                nesciunt vero natus quisquam porro officia tenetur libero
                veritatis esse fugiat ratione, illo mollitia dicta quas
                similique iure in error sit.
              </p>
            </div>
          </Grid>
        )}

        <Grid
          align="center"
          item
          xs={12}
          md={6}
          style={{ position: "relative" }}
          className={"animate__animated animate__zoomIn"}
        >
          {stream ? (
            <Paper className={classes.paper}>
              <h3
                style={{
                  position: "absolute",
                  padding: "2px 5px",
                  bottom: "28px",
                  background: "rgba(0, 0, 0, 0.7)",
                  margin: 0,
                  fontWeight: "300",
                  fontSize: "16px",
                  marginTop: "20px",
                }}
              >
                {name || "Name"}
              </h3>

              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className={classes.video}
              />
            </Paper>
          ) : (
            <h5 style={{ fontWeight: "normal" }} align="center">
              Enable your video and audio then refresh the page...
            </h5>
          )}
        </Grid>

        {callAccepted && !callEnded && (
          <Grid
            className={"animate__animated animate__zoomIn"}
            align="center"
            item
            xs={12}
            md={6}
            style={{ position: "relative" }}
          >
            <Paper className={classes.paper}>
              <h3
                style={{
                  position: "absolute",
                  padding: "2px 5px",
                  bottom: "28px",
                  background: "rgba(0, 0, 0, 0.7)",
                  margin: 0,
                  fontWeight: "300",
                  fontSize: "16px",
                }}
              >
                {call.name || "Name"}
              </h3>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className={classes.video}
              />
            </Paper>
          </Grid>
        )}
        {!callAccepted ? (
          <>
            <Grid item xs={12} md={6} style={{ position: "relative" }}>
              <Options />
            </Grid>
            <Grid item xs={12} md={6} style={{ position: "relative" }}>
              <Notifications />
            </Grid>
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(255, 95, 95, 0.8)",
              color: "#FFFFFF",
              marginTop: "5%",
              fontSize: "2em",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => leaveCall(call.peerID)}
            className={`${classes.notificationButtons} callButton end`}
          >
            <CallEnd fontSize="large" />
          </div>
        )}
      </Grid>
    </div>
  );
};

export default Homepage;
