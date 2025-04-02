'use client';
import * as I from '@components/ui/input';
import {
  RiEyeLine,
  RiEyeOffLine
} from '@remixicon/react';
import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { InputProps } from './InputProps';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ type, placeholder, iconStart, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='w-full'>
      <I.Root>
        <I.Wrapper>
          {iconStart && <I.Icon as={iconStart} />}
          <I.Input
            {...rest}
            ref={ref}
            type={type === "password" ? (showPassword ? "text" : "password") : type}
            placeholder={placeholder} />

          {type === 'password' && (
            <button type='button' onClick={() => setShowPassword((s) => !s)}>
              {showPassword ? (
                <RiEyeOffLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
              ) : (
                <RiEyeLine className='size-5 text-text-soft-400 group-has-[disabled]:text-text-disabled-300' />
              )}
            </button>
          )}
        </I.Wrapper>
      </I.Root>
    </div>
  );
}

export const Input = forwardRef(InputBase);