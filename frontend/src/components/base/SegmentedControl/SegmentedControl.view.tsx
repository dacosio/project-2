import React from "react";
import { Row, Col } from "react-grid-system";
import { SegmentedControlProps } from "./SegmentedControl.props";
import { Container, ControlButton } from "./SegmentedControl.style";

const SegmentedControl = (props: SegmentedControlProps): JSX.Element => {
  const { options, selectedOption, onClickControl, tooltips } = props;

  return (
    <Container>
      <Row className="row" nogutter>
        {options.map((option) => {
          const currentTooltip = tooltips?.find((t) => t.option === option);
          const value = currentTooltip ? currentTooltip.value : "";

          return (
            <Col key={option}>
              <ControlButton
                active={option === selectedOption}
                onClick={() => onClickControl(option)}
              >
                {option}
              </ControlButton>
            </Col>
          );
        })}
      </Row>{" "}
    </Container>
  );
};

export default React.memo(SegmentedControl);
