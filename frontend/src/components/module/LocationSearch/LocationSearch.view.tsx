import React, { useEffect, useState } from "react";
import { LocationSearchProps } from "./LocationSearch.props";
import {
  Container,
  SearchLocationContainer,
  SpinnerContainer,
  Results,
  Item,
} from "./LocationSearch.style";
import { parseGooglePlaceData } from "utils/Address/parseGooglePlaceData";
import useScript from "utils/Hooks/useScript";

const NO_RESULTS = "No results";
const API_ERROR = "Please try again";

const LocationSearch = ({
  textFieldProps,
  ...props
}: LocationSearchProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState(
    textFieldProps?.value ? String(textFieldProps.value) : ""
  );
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [searchData, setSearchData] = useState<{ id: string; title: string }[]>(
    (props.initialResult || []).map((v) => ({
      id: "initial",
      title: v,
    }))
  );
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [doSearch, setDoSearch] = useState(!!textFieldProps?.value);

  const [hasMap, error] = useScript(
    `https://maps.googleapis.com/maps/api/js?libraries=places&key=${process.env.REACT_APP_GOOGLE_PLACES_AUTOCOMPLETE_API_KEY}`
  );

  useEffect(() => {
    setSearchData([]);
  }, [searchValue]);
  const search = async (text: string) => {
    if (!hasMap) return;
    setLoading(true);

    const transformResults = (predictions: any[], error?: boolean) => {
      if (error) {
        return [
          {
            id: "1",
            title: API_ERROR,
          },
        ];
      }

      if (isEmpty(predictions) || !predictions) {
        return [
          {
            id: "1",
            title: NO_RESULTS,
          },
        ];
      }

      return predictions.map((p: { place_id: string; description: string }) => {
        return {
          id: p.place_id,
          title: p.description,
        };
      });
    };

    const placesService = new google.maps.places.AutocompleteService();

    try {
      // await new Promise((r) => setTimeout(r, 3000));

      placesService.getPlacePredictions(
        {
          input: text,
          types: [props.autocompleteType ? props.autocompleteType : "address"],
        },
        (predictions, status) => {
          if (status === "OK" || status === "ZERO_RESULTS") {
            setSearchData(transformResults(predictions));
          } else {
            setSearchData(transformResults([], true));
          }

          setLoading(false);
        }
      );
    } catch (e) {
      setSearchData(transformResults([], true));
      setLoading(false);
    }
  };
  return <Container> LocationSearch </Container>;
};

export default React.memo(LocationSearch);
