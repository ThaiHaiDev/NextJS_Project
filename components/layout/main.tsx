import * as React from 'react';
import Link from 'next/link';

import { LayoutProps } from '@/models/commom';

export interface IMainLayoutProps {
}

export function MainLayout ({children}: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>

      <Link href=''>
        Home
      </Link>

      <hr />

      <Link href='/about'>
        About
      </Link>
      <div>{children}</div>
    </div>
  );
}
