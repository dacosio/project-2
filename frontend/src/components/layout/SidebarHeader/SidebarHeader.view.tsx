import React, { useState } from "react";

import { SidebarHeaderProps } from "./SidebarHeader.props";
import { StyledLogo, StyledSidebarHeader } from "./SidebarHeader.style";
import Typography from "components/base/Typography";
import { useAppDispatch } from "app/hooks";
import { sendCollapse } from "features/sidebar/sidebarSlice";
import { CollapsedLogo, SproutLogo } from "components/base/SVG";

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
        <StyledLogo onClick={handleCollapse}>
          <CollapsedLogo height={52} width={40} />
        </StyledLogo>
        <SproutLogo width={100} height={33} />
      </div>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
