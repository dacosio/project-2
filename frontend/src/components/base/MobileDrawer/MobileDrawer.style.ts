import styled from "@emotion/styled";
import Drawer from "react-modern-drawer";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  .EZDrawer__container.modal-active {
    height: 100vh !important;
  }

  .header-display {
    position: relative;
    z-index: 0;
  }

  .modal-overlay {
    > div:last-of-type > div {
      max-height: 100vh;
    }
  }
`;

export const DrawerContainer = styled(Drawer)`
  display: flex;
  border-radius: 20px 20px 0 0;
`;

export const InnerDrawer = styled.div`
  width: 100%;
  overflow: auto;

  > div:last-of-type > div {
    max-height: 85vh;
  }
`;

export const Body = styled.div`
  padding: 3rem 1rem 2rem 1rem;
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
