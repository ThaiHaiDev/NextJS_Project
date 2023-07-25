import * as React from 'react';

import {MainLayout} from '@/components/layout';

export interface IAboutPageProps {
}
export default function AboutPage (props: IAboutPageProps) {
  return (
    <MainLayout>
      <h1>About Page</h1>

      <ul>
        <li>He</li>
        <li>Ho</li>
        <li>Ha</li>
      </ul>
    </MainLayout>
  );
}
