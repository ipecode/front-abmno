import * as H from '@components/ui/hint';
import { HintProps } from './HintProps';

export function Hint({ message, icon, ...rest }: HintProps) {
  return (
    <H.Root {...rest}>
      <H.Icon as={icon} />
      {message}
    </H.Root>
  );
}
