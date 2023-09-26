import React, { useEffect } from "react";

import YuhwanView from "./Yuhwan.view";
import { useGetTodosQuery } from "features/todos/todosApiSlice";

const Yuhwan = (): JSX.Element => {
  const { data, isLoading } = useGetTodosQuery("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const generatedProps = {
    // generated props here
  };
  return <YuhwanView {...generatedProps} />;
};

export default Yuhwan;
