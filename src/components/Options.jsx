import React, { useState, useEffect, useContext } from "react";
import { Button, TextField, Grid, Container, Paper } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { SocketContext } from "../Context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "60%%",
    margin: "0",   
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "20px",
    border: "none",
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    borderRadius: "2px",
    backgroundColor: "rgba(30, 30, 30, 0.5)",
    color: "white",
    width: "60%",
  },
  formLabels: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#5E5E5E",
  },
}));

const Options = ({ children }) => {
  const { me, name, callUser, setPreparingCall } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const classes = useStyles();

  useEffect(() => {
    console.log("name changed");
  }, [name]);
  const prepareCall = (e) => {
    e.preventDefault();
    if (idToCall.trim().length > 0) {
      setPreparingCall(true);
      callUser(idToCall);
    }
  };

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={`${classes.paper} ${classes.padding}`}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer} spacing={0}>
            <Grid item xs={12} md={12}>
              <h4 className={classes.formLabels}>Welcome {name} !</h4>
            </Grid>

            <Grid item xs={12} md={12} className={classes.margin}>
              <h4 className={classes.formLabels}>Make a call</h4>
              <TextField
                label="Callee ID"
                onChange={(e) => setIdToCall(e.target.value)}
                className={classes.formField}
                color="secondary"
                inputRef={(input) => {
                  if (input != null) {
                    input.focus();
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} md={12} className={classes.margin}>
              <Button
                variant="contained"
                startIcon={<Phone fontSize="large" />}
                onClick={(e) => prepareCall(e)}
                className={`${classes.margin} ${classes.formButton} callButton`}
                style={{ backgroundColor: "#87A330", color: "white" }}
                fullWidth
              >
                Call
              </Button>
            </Grid>

            <CopyToClipboard text={me} className={classes.margin}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                startIcon={<Assignment fontSize="large" />}
              >
                Copy Your ID
              </Button>
            </CopyToClipboard>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
