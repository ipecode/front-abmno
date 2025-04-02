import { ElementType } from "react";

export interface InputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  placeholder: string,
  iconStart?: ElementType,
  hasError?: boolean,
}