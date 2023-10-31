import styled from "@emotion/styled";
import Drawer from "react-modern-drawer";
import { theme } from "../../../utils/Theme";

export const Container = styled.div``;

export const DrawerContainer = styled(Drawer)`
  display: flex;
  border-radius: 20px 20px 0 0;
`;

export const InnerDrawer = styled.div`
  width: 100%;

  > div:last-of-type > div {
    max-height: 85vh;
    overflow: auto;
    padding: 0 16px;
  }
`;

export const Body = styled.div`
  padding: 3rem 0 2rem 0;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  position: fixed;
  width: 100%;
  z-index: 10000;
  background-color: white;
  border-radius: 20px 20px 0 0;
`;
