import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

import { ImgHTMLAttributes } from "react";

export const HeadContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  padding: 16px;
  gap: 16px;
  align-items: center;
`;

export const Avatar = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
`;

export const TitleContainer = styled.div`
  display: grid;
  gap: 8px;
`;

export const Image = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
  width: 100%;
  aspect-ratio: 2;
  object-fit: cover;
`;

export const BodyContainer = styled.div`
  padding: 16px;
`;

export const FootContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const YuhwanContainer = styled.div`
  display: grid;
  width: 100%;
  border: 1px solid ${theme.grey.shade3};
  border-radius: 4px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${theme.grey.shade3};
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid ${theme.grey.shade3};
  &:focus {
    outline: none;
  }
`;
