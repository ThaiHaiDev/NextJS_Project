import * as React from 'react';

import { MainLayout } from '@/components/layout';

export interface IPublicPageProps {
}
export default function PublicPage (props: IPublicPageProps) {
  return (
    <MainLayout>
      <h1>Public Page</h1>

      <ul>
        <li>He</li>
        <li>Ho</li>
        <li>Ha</li>
      </ul>
    </MainLayout>
  );
}
