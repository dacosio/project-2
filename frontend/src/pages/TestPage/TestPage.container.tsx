import React, { useState } from 'react';

import TestPageView from './TestPage.view';
import { useGetCardDetailsQuery } from 'features/card/cardApiSlice';

const TestPage = (): JSX.Element => {
  const { data } = useGetCardDetailsQuery('');
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const generatedProps = {
    data,
    title,
    body
  };
  return <TestPageView {...generatedProps} />;
};

export default TestPage;
