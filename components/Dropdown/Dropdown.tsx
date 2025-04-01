'use client';
import * as Select from '@components/ui/select';
import { DropdownProps } from './DropdownProps';

export function Dropdown({ options, placeholder, onChange }: DropdownProps) {

  return (
    <div className='w-full'>
      <Select.Root onValueChange={onChange}>
        <Select.Trigger aria-label={placeholder}>
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>
        <Select.Content>
          {options.map((op) => (
            <Select.Item key={op.value} value={op.value}>
              {op.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
