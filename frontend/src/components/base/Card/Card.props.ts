import { HTMLAttributes } from 'react';
import { Theme } from 'types/Theme';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  color?: keyof Theme['brand'];
  headerText?: string;
  subText?: string;
  image?: string;
  description?: string;
}

// Styles
export type CardStyleProps = {
  color?: keyof Theme['brand'];
  headerText?: string;
  subText?: string;
  image?: string;
  description?: string;
};
