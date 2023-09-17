import * as React from 'react';
import Link from 'next/link';

import { LayoutProps } from '@/models/commom';
import Auth from '../commom/auth';

export interface IAdminLayoutProps {
}

export function AdminLayout ({children}: LayoutProps) {
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <Link href=''>
        Home
      </Link>

      <Link href='/about'>
        About
      </Link>

    <div>{children}</div>
    </Auth>
  );
}
