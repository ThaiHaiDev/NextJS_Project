import * as React from 'react';
import Link from 'next/link';

import { LayoutProps } from '@/models/commom';

export interface IAdminLayoutProps {
}

export function AdminLayout ({children}: LayoutProps) {
  return (
    <div>
    <h1>Main Layout</h1>
    <div>Sidebar</div>

    <Link href=''>
      Home
    </Link>

    <Link href='/about'>
      About
    </Link>

    <div>{children}</div>
  </div>
  );
}
