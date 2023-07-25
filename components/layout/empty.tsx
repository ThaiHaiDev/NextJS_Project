import * as React from 'react';

import { LayoutProps } from '@/models/commom';

export interface IEmptyLayoutProps {
}

export function EmptyLayout ({children}: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
