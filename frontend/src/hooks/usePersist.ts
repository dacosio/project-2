import { useState, useEffect, Dispatch, SetStateAction } from "react";

type PersistState = boolean;

const usePersist = (): [
  PersistState,
  Dispatch<SetStateAction<PersistState>>,
] => {
  const [persist, setPersist] = useState<PersistState>(
    JSON.parse(localStorage.getItem("persist") || "") || false
  );

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(persist));
  }, [persist]);

  return [persist, setPersist];
};

export default usePersist;
