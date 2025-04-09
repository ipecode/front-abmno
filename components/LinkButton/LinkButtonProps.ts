export interface LinkButtonProps {
  text: string,
  className?: string,
  variant?: "error" | "gray" | "black" | "primary" | "modifiable" | undefined,
  onClick?: () => void
}