import React, { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [locationInfo, setLocationInfo] = useState({
    location: {
      name: "",
      country: "",
      localtime: "",
    },
    current: {
      temp_c: 0,
      condition: {
        text: "",
        icon: "",
      },
      wind_mph: 4.3,
      wind_dir: "",
    },
  });

  const [capitalsInfo, setCapitalsInfo] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=05a63ff628764b9bb45193959212712&q=${location}&aqi=no`
      );
      // console.log(res.data);
      setLocationInfo(res.data);
    } catch {
      console.log("error");
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        location,
        setLocation,
        locationInfo,
        setLocationInfo,
        capitalsInfo,
        setCapitalsInfo,
        handleSubmit,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
