import React, { useState } from "react";
import { LocationSearchProps } from "./LocationSearch.props";
import { Container, ResultsContainer } from "./LocationSearch.style";
import TextField from "../../base/TextField";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Typography from "components/base/Typography";

const LocationSearch = (props: LocationSearchProps): JSX.Element => {
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = useGoogle({
    apiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  console.log(process.env.REACT_APP_MAPS_API_KEY);
  const [value, setValue] = useState("");
  const handleSelectPlace = (item: any) => {
    getPlacePredictions({ input: "" });
    setValue(item.description);
    placesService?.getDetails(
      {
        placeId: item.place_id,
      },
      (placeDetails: any) => console.log(placeDetails)
    );
  };

  return (
    <Container>
      <TextField
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
          setValue(evt.target.value);
        }}
      />
      <ResultsContainer>
        {!isPlacePredictionsLoading &&
          placePredictions.map((item) => (
            <div key={item.description} onClick={() => handleSelectPlace(item)}>
              <Typography variant="body" style={{ padding: "8px" }}>
                {item.description}
              </Typography>
            </div>
          ))}
      </ResultsContainer>
    </Container>
  );
};

export default React.memo(LocationSearch);