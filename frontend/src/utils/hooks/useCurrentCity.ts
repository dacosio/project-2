import React, { useEffect, useState } from 'react';

type LocationData = {
  currentCity: string | null;
  errorMessage: string | null;
};

const getCurrentCity = (): Promise<LocationData> => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_CURRENT_LOCATION_API}`;
    
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results.length > 0) {
                // const cityOnly = data.results[0].components.city;
                // const state_code = data.results[0].components.state_code;
                // const city = cityOnly + ", " + state_code;
                const city = data.results[0].components.city;
                resolve({ currentCity: city, errorMessage: null });
              } else {
                resolve({ currentCity: null, errorMessage: "City not found" });
              }
            })
            .catch((error) => {
              console.error("Error fetching city:", error);
              resolve({ currentCity: null, errorMessage: "Error fetching city" });
            });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              resolve({ currentCity: null, errorMessage: "User denied the request for Geolocation." });
              break;
            case error.POSITION_UNAVAILABLE:
              resolve({ currentCity: null, errorMessage: "Location information is unavailable." });
              break;
            case error.TIMEOUT:
              resolve({ currentCity: null, errorMessage: "The request to get user location timed out." });
              break;
            default:
              resolve({ currentCity: null, errorMessage: "An error occurred while fetching location." });
          }
        }
      );
    } else {
      resolve({ currentCity: null, errorMessage: "Geolocation is not available in your browser." });
    }
  });
};

export const useCurrentCity = () => {
  const [locationData, setLocationData] = useState<LocationData>({
    currentCity: "Vancouver",
    errorMessage: null,
  });

  useEffect(() => {
    getCurrentCity()
      .then((data) => {
        setLocationData(data);
      })
      .catch((error) => {
        console.error("Error getting current city:", error);
      });
  }, []);

  return locationData;
};