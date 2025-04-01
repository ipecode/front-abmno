'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicThemeSwitch = dynamic(() => import('./theme-switch' as any),  { ssr: false });

export default function Header() {
  return (
    <div className='border-b border-stroke-soft-200'>
      <header className='mx-auto flex h-14 max-w-5xl items-center justify-between px-5'>
        <Link
          href='/'
          className='flex items-center gap-2 text-label-md text-text-strong-950'
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
            src='/images/logo.svg'
            alt=''
            className='size-9 object-contain'
          /> */}
          <strong>ABNMO</strong>
        </Link>

        <DynamicThemeSwitch />
      </header>
    </div>
  );
}
