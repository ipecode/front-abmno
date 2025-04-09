'use client';
import * as C from '@components/ui/checkbox';
import { cn } from '@utils/cn';
import { Label } from '../Label/Label';
import { CheckboxProps } from './CheckboxProps';

export function Checkbox({
  options,
  name,
  onChange,
  className,
  value
}: CheckboxProps) {

  const handleChange = (value: string) => {
    if (onChange) onChange(value);
  };

  return (
    <div className={cn('flex', className)}>
      {options.map((o) => (
        <div key={o.value} className='flex items-center gap-1'>
          <C.Root
            checked={value === o.value}
            onCheckedChange={() => handleChange(o.value)}
            id={`${name}-${o.value}`}
          />
          <Label label={o.label} htmlFor={`${name}-${o.value}`} />
        </div>
      ))}
    </div>
  );
}
