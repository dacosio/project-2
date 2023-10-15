import React, { useState } from "react";
import { DashboardGeneratedProps } from "./Dashboard.props";
import { Wrapper, RowTitle } from "./Dashboard.style";
import Typography from "components/base/Typography";
import { Row, Col } from "react-grid-system";
import SegmentedControl from "../../components/base/SegmentedControl";
import { useNavigate } from "react-router-dom";
import HarvestCard from "../../components/module/HarvestCard";

const DashboardView = (props: DashboardGeneratedProps) => {
  const MOCK_OPTIONS = ["Today", "15-day"];
  const [state, setState] = useState(MOCK_OPTIONS[0]);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Row>
        <Typography variant="title2" weight="700">
          Hello Wade, let's farm!
        </Typography>
      </Row>
      <Row>
        <Col>Weather Card</Col>
        <Col>
          <SegmentedControl
            options={MOCK_OPTIONS}
            selectedOption={state}
            onClickControl={(value: string) => {
              console.log(value);
              setState(value);
            }}
          />
        </Col>
      </Row>
      <RowTitle align="center" justify="between">
        <Typography variant="title3" weight="700">
          Your Planted Crops
        </Typography>
        <Typography
          variant="subtitle"
          weight="700"
          textColor="shade5"
          onClick={() => navigate("/your-crops")}
          style={{ cursor: "pointer" }}
        >
          see more
        </Typography>
      </RowTitle>
      <Row>
        <Col md={3}>
          <HarvestCard
            cropName="Carrot"
            maxValue={100}
            value={65}
            title="65"
            subtitle="days"
            size="desktop"
            id="1"
            datePlanted="Jan 1, 2023"
            estYield="xx lb/plant"
            height={137}
            width={137}
          />
        </Col>
        <Col md={3}>
          <HarvestCard
            cropName="Carrot"
            maxValue={100}
            value={65}
            title="65"
            subtitle="days"
            size="desktop"
            id="1"
            datePlanted="Jan 1, 2023"
            estYield="xx lb/plant"
            height={137}
            width={137}
          />
        </Col>
        <Col md={3}>
          <HarvestCard
            cropName="Carrot"
            maxValue={100}
            value={65}
            title="65"
            subtitle="days"
            size="desktop"
            id="1"
            datePlanted="Jan 1, 2023"
            estYield="xx lb/plant"
            height={137}
            width={137}
          />
        </Col>
        <Col md={3}>
          <HarvestCard
            cropName="Carrot"
            maxValue={100}
            value={65}
            title="65"
            subtitle="days"
            size="desktop"
            id="1"
            datePlanted="Jan 1, 2023"
            estYield="xx lb/plant"
            height={137}
            width={137}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DashboardView;
