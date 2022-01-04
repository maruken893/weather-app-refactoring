import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    location: {
      marginBottom: theme.spacing(4),
      fontWeight: "bold",
      textAlign: "center",
    },
    weatherIcon: {
      marginRight: theme.spacing(2),
    },
    item: {
      textAlign: "center",
      border: "1px solid #f1f1f1",
      padding: 16,
    },
  };
});

const LocationCard = ({ locationInfo }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        {locationInfo.location.name && (
          <>
            <Typography
              variant="h5"
              color="primary"
              className={classes.location}
            >
              {locationInfo.location.name} ({locationInfo.location.country}
              )の天気
            </Typography>
            <Grid container>
              <Grid item className={classes.item} lg={3} md={6} xs={12}>
                <Typography variant="h5">
                  <span className={classes.weatherIcon}>
                    <BsFillCloudSunFill />
                  </span>
                  天気
                </Typography>
                <img src={`https:${locationInfo.current.condition.icon}`} />
                <Typography variant="h6">
                  {locationInfo.current.condition.text}
                </Typography>
              </Grid>
              <Grid item className={classes.item} lg={3} md={6} xs={12}>
                <Typography variant="h5">
                  <span className={classes.weatherIcon}>
                    <FaTemperatureHigh />
                  </span>
                  気温
                </Typography>
                <Typography variant="h5">
                  {String(locationInfo.current.temp_c) + "°C"}
                </Typography>
              </Grid>
              <Grid item className={classes.item} lg={3} md={6} xs={12}>
                <Typography variant="h5">
                  <span className={classes.weatherIcon}>
                    <BiWind />
                  </span>
                  風速
                </Typography>
                <Typography variant="h5">
                  {String(locationInfo.current.wind_mph) + " m/h"}
                </Typography>
              </Grid>
              <Grid item className={classes.item} lg={3} md={6} xs={12}>
                <Typography variant="h5">
                  <span className={classes.weatherIcon}>
                    <FaClock />
                  </span>
                  時間
                </Typography>
                <Typography variant="h5">
                  {locationInfo.location.localtime.slice(0, 10)}
                </Typography>
              </Grid>
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LocationCard;
