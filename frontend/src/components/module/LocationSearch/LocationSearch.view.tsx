import React, { useState } from "react";
import { LocationSearchProps } from "./LocationSearch.props";
import { Container, ResultsContainer } from "./LocationSearch.style";
import TextField from "../../base/TextField";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Typography from "../../base/Typography";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectAddress,
  storeAddress,
  storeCity,
} from "../../../features/location/locationSlice";

const LocationSearch = (props: LocationSearchProps): JSX.Element => {
  const { onClickControl = () => null } = props;

  const dispatch = useAppDispatch();

  const apiKey: string | undefined = process.env.REACT_APP_PLACES_API;
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = useGoogle({
    apiKey,
  });

  const [value, setValue] = useState<string | undefined>(
    useAppSelector(selectAddress)
  );

  const handleSelectPlace = (item: {
    description: string;
    place_id: string;
  }) => {
    getPlacePredictions({ input: "" });
    if (placesService && item.place_id) {
      placesService.getDetails(
        {
          placeId: item.place_id,
          language: "en",
        },
        (placeDetails) => {
          setValue(placeDetails?.formatted_address);
          dispatch(storeAddress(placeDetails?.formatted_address));
          dispatch(storeCity(placeDetails?.vicinity));
          console.log(placeDetails);
          placeDetails && onClickControl(placeDetails.name || "Toronto");
        }
      );
    }
  };

  return (
    <Container>
      <TextField
        value={value}
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
          setValue(evt.target.value);
        }}
        placeholder="Type in your city, province, etc..."
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
