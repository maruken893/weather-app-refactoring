import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => {
  return {
    formContainer: {
      paddingBottom: 10,
      marginBottom: 20,
      display: "flex",
      justifyContent: "center",
      gap: 30,
    },
    searchWeather: {
      paddingTop: 20,
      marginBottom: 18,
      textAlign: "center",
      fontWeight: 600,
    },
  };
});

export const LocationForm = () => {
  const classes = useStyles();
  const { setLocation, handleSubmit } = useContext(GlobalContext);

  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        className={classes.searchWeather}
      >
        天気を検索
      </Typography>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <TextField
          className={classes.inputField}
          onChange={(e) => setLocation(e.target.value)}
          label="location"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Submit
        </Button>
      </form>
    </>
  );
};
