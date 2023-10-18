import React from "react";
import { CropAboutProps } from "./CropAbout.props";
import { Container } from "./CropAbout.style";
import CropInformation from "../CropInformation";

const CropAbout = (props: CropAboutProps): JSX.Element => {
  return (
    <Container>
      <CropInformation
        ph="0.0 - 0.0"
        nitrogen="0"
        phosphorus="0"
        potassium="0"
        suggestions={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Phasellus aliquam metus nec nulla ullamcorper tempor.",
          "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
        ]}
        tips={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Phasellus aliquam metus nec nulla ullamcorper tempor.",
          "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
        ]}
      />
    </Container>
  );
};

export default React.memo(CropAbout);
