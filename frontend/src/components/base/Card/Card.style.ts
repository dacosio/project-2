import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  height: 500px;
  border: 1px solid gray;
  box-shadow: 5px 5px 5px gray;
//   justify-content: center;
//   align-items: center;
//   margin-left: 8px;
`;

export const CardHeader = styled.div`
  display: flex;
  padding: 10px 20px;
  gap: 10px;
`;

export const CardHeaderImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: 30px;
`;

export const CardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardContentImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CardFooter = styled.div`
display: flex;
`;