import React, { useState } from "react";
import { HomeGeneratedProps, YourSearchItemType } from "./Home.props";
import { Container } from "./Home.style";
import Typography from "./../../components/base/Typography";
import WeatherCard from "./../../components/base/WeatherCard";
import Search from './../../components/base/Search';
import axios from "axios";

const HomeView = (props: HomeGeneratedProps) => {
  const [searchResults, setSearchResults] = useState<Array<YourSearchItemType>>([]);
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

  const searches = [
    {
      _id: 1,
      name: 'Carrot',
      about: 'Carrots are root vegetables known for their orange color and sweet taste.',
      ideal_temp: '60-70°F (15-24°C)',
      humidity: '70-80%',
      growing_period: '70-80 days"',
      fertilizer_composition: 'N-P-K: 10-20-20'
    },
    {
      _id: 2,
      name: 'Tomato',
      about: 'Tomatoes are a popular vegetable used in various culinary dishes.',
      ideal_temp: '70-85°F (21-29°C)',
      humidity: '40-60%',
      growing_period: '60-85 days',
      fertilizer_composition: 'N-P-K: 5-10-5'
    },
  ]

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



  const fetchSearchResult = async (searchTerm: any) => {
    const filteredSearches = searches?.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setSearchResults(filteredSearches || []);
  }

  return (
    <Container>
      I am Home Screen and I can be viewed by the public
      <div>
        <button onClick={onPredict}>predict</button>
        <div>Recommended Crop: {responseData.prediction[0]}</div>
        <Search onSearch={fetchSearchResult} searchResults={searchResults} />
      </div>
    </Container>
  );
};

export default HomeView;
