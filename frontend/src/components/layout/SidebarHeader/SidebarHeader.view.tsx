import React from "react";

import { SidebarHeaderProps } from "./SidebarHeader.props";
import { StyledLogo, StyledSidebarHeader } from "./SidebarHeader.style";
import Typography from "components/base/Typography";

const SidebarHeader = ({
  children,
  ...rest
}: SidebarHeaderProps): JSX.Element => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledLogo>L</StyledLogo>
        <Typography variant="title4" color="shade9">
          Lumpia
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
