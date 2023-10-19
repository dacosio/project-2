import styled from "@emotion/styled";

export const Container = styled.div`
  height: 38px;
  width: 100%;
  background: ${(props) => props.theme.bg.primary};
  border-radius: 8px;

  display: inline-flex;
  flex-direction: row;

  .row {
    width: 100%;
  }
`;

export const ControlButton = styled.button<{ active: boolean }>`
  height: 100%;
  min-width: 90px;
  width: 100%;
  border-radius: 8px;
  border: none;
  background: ${(props) => (props.active ? props.theme.brand.green : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
