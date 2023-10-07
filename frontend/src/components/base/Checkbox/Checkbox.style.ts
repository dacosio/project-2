import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomCheckbox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid #57cb62;
  border-radius: 4px;
  background-color: white;
  margin-right: 5px;
  cursor: pointer;

  &:checked {
    background-color: #57cb62;
  }

  &::before {
    content: "✔";
    display: inline-block;
    font-size: 22px;
    color: white;
    position: relative;
    top: -3px;
    left: 5px;
  }
`;
