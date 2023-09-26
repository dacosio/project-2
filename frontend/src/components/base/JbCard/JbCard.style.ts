import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.button``;

export const Button = styled.button`
text-transform: uppercase;
font-weight: 700;
font-size: .8rem;
color: #912cf5;
letter-spacing: 1px;
background-color: unset;
border: none;
`;

export const Card = styled.div`
text-align: left;
max-width: 300px;
padding: 2em;
display: grid;
grid-gap: 1em;
border-radius: 12px;
background-color: white;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.292);
`;

export const ButtonsDiv = styled.div`
display: flex;
gap: 1em;
justify-content: flex-end;
`;

export const CheckBoxWrapper = styled.div`
color: blue;
border: 1px solid red;
`;

export const CheckBox = styled.input`
border: 1px solid red;
background-color: hotpink;
`;
