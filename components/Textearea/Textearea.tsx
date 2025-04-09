'use client';
import * as T from '@components/ui/textarea';
import { Controller } from 'react-hook-form';
import { TexteareaProps } from './TexteareaProps';

export function Textarea({ placeholder, name, rules, control, ...rest }: TexteareaProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className="w-full">
          <T.Root {...rest} placeholder={placeholder} {...field}>
            <T.CharCounter current={field.value?.length || 0} max={500} />
          </T.Root>
        </div>
      )}
    />
  );
}