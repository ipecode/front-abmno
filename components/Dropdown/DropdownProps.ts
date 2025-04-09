export interface DropdownProps {
  options: { label: string; value: string }[],
  placeholder?: string,
  value?: string,
  onChange: (value: string) => void
}