import React, { useState } from "react";
import { HomeGeneratedProps } from "./Home.props";
import { Container } from "./Home.style";
import Typography from "./../../components/base/Typography";
import WeatherCard from "./../../components/base/WeatherCard";
import Search from './../../components/base/Search';
import axios from "axios";
import LocationSearch from "components/module/LocationSearch";

const HomeView = (props: HomeGeneratedProps) => {
  const [responseData, setResponseData] = useState({ prediction: [""] });
  const [error, setError] = useState(null);
  const apiUrl = "http://localhost:5000/predict-crop";
  const postData = {
    N: 831,
    P: 44215,
    K: 1230,
    temperature: 28,
    humidity: 120.221212123,
    ph: 2227.0,
    rainfall: 1230.9,
  };

  const onPredict = () =>
    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log(response);
        // Set the response data in the component's state
        setResponseData(response.data);
        setError(null);
      })
      .catch((error) => {
        // Handle any errors and set the error in the component's state
        setResponseData({ prediction: [""] });
        setError(error);
        console.log(error);
      });

  console.log(responseData);



  return (
    <Container>
      I am Home Screen and I can be viewed by the public
      <div>
        <button onClick={onPredict}>predict</button>
        <div>Recommended Crop: {responseData.prediction[0]}</div>
      </div>
      <LocationSearch />
    </Container>
  );
};

export default HomeView;
