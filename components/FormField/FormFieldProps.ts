import { ElementType, InputHTMLAttributes } from 'react';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  placeholder: string;
  hasError?: boolean;
  icon?: ElementType;
  message?: string;
  campoObrigatorio?: boolean;
  asteriskColor?: string;
}
