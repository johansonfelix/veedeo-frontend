import React, { useState, useContext } from "react";
import { SocketContext } from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Grid, TextField, Button } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import logo from "../images/veedeo.png";
import {isMobile} from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
  splashScreen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
  },
  root: {
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    width: "30%",
  },
  container: {
    width: "300px",
    margin: "10px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  paper: {
    padding: "20px",
    border: "none",
    display: "flex",
    alignItems: "center",

    borderRadius: "4px",
    backgroundColor: "rgba(30, 30, 30, 0.5)",
    color: "white",
    width: "300px",
  },
  formLabels: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#5E5E5E",
  },
  logoAnimate: {
    display: " inline-block",
    margin: "0 0.5rem",
    animation:
      "heartBeat" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "3s" /* don't forget to set a duration! */,
  },
  containerAnimate: {
    display: " inline-block",
    margin: "0 0.5rem",
    animation:
      "fadeIn" /* referring directly to the animation's @keyframe declaration */,
    animationDuration: "3s",
  },
}));

const SplashScreen = () => {
  const classes = useStyles();
  const { setName, setUserStart } = useContext(SocketContext);
  const [inputName, setInputName] = useState("");

  const handleButtonClick = (e) => {
    console.log("in function");
    e.preventDefault();
    if (inputName.trim().length > 0) {
      setName(inputName);
      setUserStart(true);
    }
  };

  return (
    <div className={`${classes.splashScreen}`}>
      <img
        src={logo}
        className={`${classes.logo} ${classes.logoAnimate} animate__animated animate__heartBeat animate__infinite	infinite`}
        alt=""
      />

      {isMobile ? (
        <p>This application is not built for mobile yet. Try veedeo on desktop.</p>
      ) : (
        <Container
          className={`${classes.container} animate__animated animate__fadeInUp`}
        >
          <Paper className={classes.paper}>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={(e) => handleButtonClick(e)}
            >
              <Grid container>
                <Grid item xs={12} md={12}>
                  <h4 className={classes.formLabels}>
                    Enter your name to begin:{" "}
                  </h4>
                </Grid>
                <Grid item xs={8} md={8}>
                  <TextField
                    fullWidth
                    className={classes.formField}
                    color="secondary"
                    onChange={(e) => setInputName(e.target.value)}
                    id="name"
                    inputRef={(input) => {
                      if (input != null) {
                        input.focus();
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={4} md={4} align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleButtonClick(e)}
                    className={`${classes.margin} nextPageButton`}
                    style={{ backgroundColor: "#0F62E4" }}
                  >
                    <ArrowForward />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      )}
    </div>
  );
};

export default SplashScreen;
