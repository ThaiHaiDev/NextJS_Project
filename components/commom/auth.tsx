import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';

export interface AuthProps {
	children: any
	requireLogin?: boolean
}

export default function Auth ({ children, requireLogin = false }: AuthProps) {
    const router = useRouter();
  const { profile, isFirstLoading } = useAuth(); 

  useEffect(() => {
    if (!isFirstLoading && !profile?.username) {
        router.push('/login');
    }
  }, [isFirstLoading, profile, router])

  if (!profile?.username) {
    return <p>Loading...</p>
  }
  return (
    <div>{children}</div>
  );
}
