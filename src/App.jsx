import React, { useContext } from "react";
import { SocketContext } from "./Context";
import { AppBar, Toolbar } from "@material-ui/core";
import { Homepage, SplashScreen } from "./components";
import { makeStyles } from "@material-ui/core/styles/";


import logo from "./images/veedeo.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "5px",
    display: "flex",
    flexDirection: "row",

    color: "white",
    backgroundColor: "#0F0E17",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    color: "white",
  },

  logo: {
    width: "10%",
  },
}));

const App = () => {
  const { userStart } = useContext(SocketContext);
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {!userStart ? (
        <SplashScreen />
      ) : (
        <>
          <AppBar className={classes.appBar} position="static" elevation={0}>
            <Toolbar>
              <img
                className={classes.logo}
                src={logo}
                alt="logo"
                style={{ cursor: "pointer" }}
              />
            </Toolbar>
          </AppBar>

          <Homepage />
        </>
      )}
    </div>
  );
};

export default App;
