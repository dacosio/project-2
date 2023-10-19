import React, { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Search from "../../../src/components/base/Search";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import SearchResult from '../../../src/components/base/SearchResult';

const meta: Meta<typeof Search> = {
  title: "Base/Search",
  component: () => {
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
    return (
      <Container style={{ flexDirection: 'column' }}>
        <Search
          dynamicPlaceholder='Input text here'
          onSearch={fetchSearchResult}
          delay={delay}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
        />
        {searchTerm && <SearchResult searchTerm={searchTerm} searchResults={searchResults} delay={delay} />}
      </Container>
    )
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
