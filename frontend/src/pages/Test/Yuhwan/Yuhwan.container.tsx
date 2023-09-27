import React, { useCallback, useEffect, useState } from "react";

import YuhwanView from "./Yuhwan.view";
import {
  useGetAllYuhwansQuery,
  useAddYuhwanMutation,
  useDeleteYuhwanMutation,
} from "features/yuhwans/yuhwansApiSlice";
import { YuhwanGeneratedProps } from "./Yuhwan.props";

const Yuhwan = (): JSX.Element => {
  const { data } = useGetAllYuhwansQuery("");
  const [addYuhwan] = useAddYuhwanMutation();
  const [deleteYuhwan] = useDeleteYuhwanMutation();

  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleOnSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if ([title, subtitle, description].every(Boolean)) {
          const response = await addYuhwan({
            title,
            subtitle,
            description,
          }).unwrap();

          setTitle("");
          setSubtitle("");
          setDescription("");
        }
      } catch (err) {
        console.error(err);
      }
    },
    [title, subtitle, description]
  );

  const handleOnDelete = useCallback(async (id: string) => {
    try {
      const response = await deleteYuhwan({ id }).unwrap();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const generatedProps: YuhwanGeneratedProps = {
    data,
    title,
    setTitle,
    subtitle,
    setSubtitle,
    description,
    setDescription,
    handleOnSubmit,
    handleOnDelete,
  };
  return <YuhwanView {...generatedProps} />;
};

export default Yuhwan;
