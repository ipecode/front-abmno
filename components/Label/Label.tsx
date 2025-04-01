import * as L from '@components/ui/label';
import { LabelProps } from './LabelProps';

export function Label({
  label,
  observacao,
  campoObrigatorio,
  asteriskColor = '#008B62',
  ...rest
}: LabelProps) {
  return (
    <L.Root className='pb-1' {...rest}>
      {label}
      {campoObrigatorio && <L.Asterisk className={`text-[${asteriskColor}]`} />}
      <L.Sub className='pl-1 text-neutral-400'>{observacao}</L.Sub>
    </L.Root>
  );
}
