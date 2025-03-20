import clsx, { type ClassValue } from 'clsx';
export { type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { shadows, texts, borderRadii } from 'tailwind.config';

export const twMergeConfig = {
  extend: {
    classGroups: {
      'font-size': [
        {
          text: Object.keys(texts),
        },
      ],
      shadow: [
        {
          shadow: Object.keys(shadows),
        },
      ],
      rounded: [
        {
          rounded: Object.keys(borderRadii),
        },
      ],
    },
  },
};

const customTwMerge = extendTailwindMerge(twMergeConfig);

export function cn(...classes: ClassValue[]) {
  return customTwMerge(clsx(...classes));
}