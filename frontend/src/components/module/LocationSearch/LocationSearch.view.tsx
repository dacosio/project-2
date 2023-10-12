import React, { useState } from "react";
import { LocationSearchProps } from "./LocationSearch.props";
import { Container } from "./LocationSearch.style";
import TextField from "../../base/TextField";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

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
      {!isPlacePredictionsLoading &&
        placePredictions.map((item) => (
          <div key={item.description} onClick={() => handleSelectPlace(item)}>
            {item.description}
          </div>
        ))}
    </Container>
  );
};

export default React.memo(LocationSearch);
