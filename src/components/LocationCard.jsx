import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { FaTemperatureHigh } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { BsFillCloudSunFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => {
  return {
    capitalName: {
      textAlign: "center",
      marginBottom: 15,
    },
  };
});

const LocationCard = ({ capital }) => {
  const classes = useStyles();
  console.log(capital);
  return (
    <Card>
      <CardContent>
        {capital.location.name && (
          <>
            <Typography variant="h6" className={classes.capitalName}>
              {capital.location.name} ({capital.location.country})
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h5">
                  <span className={classes.weatherIcon}>
                    <BsFillCloudSunFill />
                  </span>
                  天気
                </Typography>
                <img src={`https:${capital.current.condition.icon}`} />
                <Typography variant="h6">
                  {capital.current.condition.text}
                </Typography>
              </Grid>
              <Grid item sx={6}>
                <Typography variant="h5">
                  <span className={classes.weatherIcon}>
                    <FaTemperatureHigh />
                  </span>
                  気温
                </Typography>
                <Typography variant="h5">
                  {String(capital.current.temp_c) + "°C"}
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
