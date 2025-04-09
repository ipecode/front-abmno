import { TextareaHTMLAttributes } from "react";
import { Control, RegisterOptions } from "react-hook-form";

export interface TexteareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string,
  placeholder?: string,
  rules?: RegisterOptions,
  hasError?: boolean,
  control: Control<any>
}