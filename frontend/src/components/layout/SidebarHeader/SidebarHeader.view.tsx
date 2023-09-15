import React, { useState } from "react";

import { SidebarHeaderProps } from "./SidebarHeader.props";
import { StyledLogo, StyledSidebarHeader } from "./SidebarHeader.style";
import Typography from "components/base/Typography";
import { useAppDispatch } from "app/hooks";
import { sendCollapse } from "features/sidebar/sidebarSlice";

const SidebarHeader = ({
  children,
  ...rest
}: SidebarHeaderProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [collapse, setCollapse] = useState<boolean>(false);
  const handleCollapse = () => {
    const toggleCollapse = !collapse;
    setCollapse(toggleCollapse);
    dispatch(sendCollapse(toggleCollapse));
  };
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledLogo onClick={handleCollapse}>L</StyledLogo>
        <Typography variant="title4" color="shade9">
          Lumpia
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
