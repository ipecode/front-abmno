export interface CheckboxProps {
  options: { label: string; value: string }[];
  name: string;
  onChange?: (value: string) => void;
  className?: string;
  value?: string
}
