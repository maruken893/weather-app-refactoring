import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import LocationCard from "./LocationCard";
import LocationCardDetail from "./LocationCardDetail";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const capitals = [
  "Tokyo",
  "London",
  "Washington",
  "New York",
  "Shanghai",
  "Seoul",
  "Taipei",
];

const useStyles = makeStyles((theme) => {
  return {
    worldWeatherTitle: {
      marginTop: 40,
      marginBottom: 18,
      textAlign: "center",
      fontWeight: 600,
    },
  };
});

export const LocationCardList = () => {
  const classes = useStyles();
  const { locationInfo, capitalsInfo, setCapitalsInfo } =
    useContext(GlobalContext);

  useEffect(() => {
    capitals.map(async (capital, index) => {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=05a63ff628764b9bb45193959212712&q=${capital}&aqi=no`
      );
      // to push objct in array I have to use this style
      setCapitalsInfo((prevArr) => [...prevArr, res.data]);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LocationCardDetail locationInfo={locationInfo} />
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        color="primary"
        className={classes.worldWeatherTitle}
      >
        世界の天気
      </Typography>
      <Grid container spacing={3}>
        {capitalsInfo.map((capital, index) => (
          <>
            <Grid item xs={12} md={6} lg={4}>
              <LocationCard key={index} capital={capital} />
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
};
