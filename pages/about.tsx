import * as React from 'react';

import {AdminLayout, MainLayout} from '@/components/layout';
import { Typography } from '@mui/material';

export interface IAboutPageProps {
}
export default function AboutPage (props: IAboutPageProps) {
  return (
    <AdminLayout>
      <Typography component="h1" variant='h3' color="primary.main">About Page</Typography>
    </AdminLayout>
  );
}

AboutPage.Layout = AdminLayout