import * as L from '@/components/ui/link-button';
import { LinkButtonProps } from './LinkButtonProps';

export function LinkButton({ variant = 'error', className, text, onClick }: LinkButtonProps) {
  return (
    <L.Root className={className} underline variant={variant} onClick={onClick}>
      {text}
    </L.Root>
  );
}
