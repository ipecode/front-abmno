'use client';

import * as React from 'react';

import * as VerticalStepper from '@components/ui/vertical-stepper';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { steps } from './SidebarSteps';

export function Sidebar() {
  const [activeStep, setActiveStep] = useState<number>();
  const pathname = usePathname();

  useEffect(() => {
    const activeIndex = steps.findIndex(step => step.path === pathname);
    setActiveStep(activeIndex);
  }, [pathname])

  const getState = (idx: number) => {
    return activeStep === idx ? 'active' : 'default';
  }

  return (
    <VerticalStepper.Root className='w-80'>
      <h1 className='text-label-xs text-text-soft-400'>TRIAGEM</h1>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <VerticalStepper.Item
            className={`bg-transparent grid grid-rows-2 gap-0 text-label-sm cursor-text ${activeStep === idx ? 'font-semibold' : ''}`}
            state={getState(idx)}>

            <div className='inline-flex gap-4'>
              <VerticalStepper.ItemIndicator
                className={`border ml-[-0.5rem] transition-all ${activeStep === idx ? 'bg-[#008B62] border-[#2FD898]' : ''}`}>
                {step.indicator}
              </VerticalStepper.ItemIndicator>
              {step.label}
            </div>

            <p className='text-neutral-500 font-normal pl-7'>{step.info}</p>

          </VerticalStepper.Item>
        </React.Fragment>
      ))}
    </VerticalStepper.Root>
  );
}
