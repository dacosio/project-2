import React, { useState } from 'react';
import { CropGuideGeneratedProps } from './CropGuide.props';
import {
  Container,
  Header,
  SearchContainer,
  Body,
  Conditions,
  GridLayout
} from './CropGuide.style';
import CropCondition from './../../../components/base/CropCondition';
import PlantResult from 'components/base/PlantResult';
import Typography from 'components/base/Typography';
import Search from 'components/base/Search';
import SearchResult from 'components/base/SearchResult';

const CropGuideView = (props: CropGuideGeneratedProps) => {
  const conditions = [
    {
      title: "Temperature",
      output: "21-27°C"
    },
    {
      title: "Humidity",
      output: "65-85%"
    },
    {
      title: "Expected Harvest",
      output: "50-65 days"
    },
    {
      title: "Yield Prediction (fruits per crop)",
      output: "150-200"
    }
  ]

  type YourSearchItemType = {
    _id: number;
    name: string;
    about: string;
    ideal_temp: string;
    humidity: string;
    growing_period: string;
    fertilizer_composition: string;
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

  const [searchResults, setSearchResults] = useState<Array<YourSearchItemType>>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const delay = 500;

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  const fetchSearchResult = async (searchTerm: any) => {
    const filteredSearches = searches?.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setSearchResults(filteredSearches || []);
  }

  const getCondition = () => {
    return conditions.map((con, i) =>
      <CropCondition key={i} title={con.title} output={con.output} />
    )
  }

  {/* <Conditions>
          {getCondition()}
        </Conditions> */}

  return (
    <Container>
      <Header>
        <Typography variant='title2' textColor='noshade'>Crop Guide</Typography>
        <Typography variant='subtitle' weight='200' textColor='noshade'>Have a crop or two you want to plant?<br />Get tips on growing them from us!</Typography>

        <SearchContainer>
          <Search
            dynamicPlaceholder='Search for crop, plants, fruits etc...'
            onSearch={fetchSearchResult}
            delay={delay}
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            setSearchTerm={setSearchTerm} />
        </SearchContainer>
      </Header>
      <Body>
        {searchTerm && <SearchResult searchTerm={searchTerm} searchResults={searchResults} delay={delay} />}
      </Body>
    </Container>
  );
};

export default CropGuideView;
