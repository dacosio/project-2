import styled from "@emotion/styled";

export const Container = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.bg.primary};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 16px;
  max-width: 215px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Harvest = styled.div`
  text-align: center;
`;

export const Bottom = styled.div<{ mobile: boolean }>`
  display: flex;

  ${({ mobile }) =>
    mobile
      ? `
      flex-direction: column;
      `
      : `
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
      `};
`;

export const Planted = styled.div<{ mobile: boolean }>`
  ${({ mobile }) =>
    mobile &&
    `display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;

export const Yield = styled.div<{ mobile: boolean }>`
  text-align: right;
  ${({ mobile }) =>
    mobile &&
    `display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;
