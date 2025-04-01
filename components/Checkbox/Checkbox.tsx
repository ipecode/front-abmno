'use client';
import * as C from '@components/ui/checkbox';
import { useState } from 'react';
import { Label } from '../Label/Label';
import { CheckboxProps } from './CheckboxProps';
import { cn } from '@utils/cn';

export function Checkbox({
  options,
  name,
  onChange,
  className,
}: CheckboxProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className={cn('flex', className)}>
      {options.map((o) => (
        <div key={o.value} className='flex items-center gap-1'>
          <C.Root
            checked={selectedValue === o.value}
            onCheckedChange={() => handleChange(o.value)}
            id={`${name}-${o.value}`}
          />
          <Label label={o.label} htmlFor={`${name}-${o.value}`} />
        </div>
      ))}
    </div>
  );
}
