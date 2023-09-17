import * as React from 'react';

import {AdminLayout, MainLayout} from '@/components/layout';

export interface IAboutPageProps {
}
export default function AboutPage (props: IAboutPageProps) {
  return (
    <AdminLayout>
      <h1>About Page</h1>

      <ul>
        <li>He</li>
        <li>Ho</li>
        <li>Ha</li>
      </ul>
    </AdminLayout>
  );
}

AboutPage.Layout = AdminLayout