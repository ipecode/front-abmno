'use client';
import * as T from '@components/ui/textarea';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Controller } from 'react-hook-form';
import { TexteareaProps } from './TexteareaProps';

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TexteareaProps> = ({ placeholder, name, rules, control, ...rest }) => {
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

export const Textarea = forwardRef(TextareaBase);