// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';

declare module 'index.d.ts' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
