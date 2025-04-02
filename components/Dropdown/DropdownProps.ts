export interface DropdownProps {
  options: { label: string; value: string }[],
  placeholder?: string,
  onChange: (value: string) => void
}