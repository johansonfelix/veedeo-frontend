import React, { useContext } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { Phone, PhoneDisabled } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "../Context";

const useStyles = makeStyles((theme) => ({
  callingDialog: {
    postion: "absolute",
    backgroundColor: "#0F0E17",
    top: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "1000",
  },

  notificationButtons: {
    marginRight: "5px",
    marginTop: "10px",
  },
}));

const CallingDialog = () => {
  const classes = useStyles();
  const { call, answerCall } = useContext(SocketContext);

  const hideContainer = () => {
    document.querySelector(".makeStyles-gridContainer-13").style.display =
      "none";
  };

  const onAnswer = (e) => {
    document.querySelector(".makeStyles-gridContainer-13").style.display =
      "flex";
    answerCall();
  };
  return (
    <Container className={classes.calingDialog}>
      {hideContainer()}
      <Grid container>
        <Grid item xs={12} md={12}>
          <h2 align="center">{call.name} is calling...</h2>
        </Grid>
        <Grid item xs={12} md={12} align="center">
          <Button
            variant="contained"
            style={{ backgroundColor: "#87A330", color: "#FFFFFF" }}
            onClick={onAnswer}
            className={`${classes.notificationButtons} callButton`}
            startIcon={<Phone fontSize="large" />}
          >
            Answer
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={""}
            className={classes.notificationButtons}
            startIcon={<PhoneDisabled fontSize="large" />}
          >
            Decline
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CallingDialog;
