import styled from "@emotion/styled";

export const Container = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.bg.primary};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 16px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Harvest = styled.div`
  text-align: center;
`;
