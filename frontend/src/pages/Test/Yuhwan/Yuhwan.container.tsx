import React, { useEffect } from "react";

import YuhwanView from "./Yuhwan.view";

const Yuhwan = (): JSX.Element => {
  useEffect(() => {
    const main = async () => {
      const response = await fetch("http://localhost:3500/api/yuhwan");
      const data = await response.json();
      console.log(data);
    };
    main();
  }, []);

  const generatedProps = {
    // generated props here
  };
  return <YuhwanView {...generatedProps} />;
};

export default Yuhwan;
