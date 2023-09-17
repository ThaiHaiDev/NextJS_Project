import * as React from 'react';

import { authApi } from '@/api/auth-api';
import { useAuth } from '@/hooks/use-auth';

export default function LoginPage () {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false
  });

  const handleLogin = async () => {
    try {
      await login();
      console.log('Link to dashboard');
    } catch (error) {
      console.log('Login failed', error);
    }
  }

  // const handleGetProfile = async () => {
  //   try {
  //     await authApi.getProfile()
  //   } catch (error) {
  //     console.log('Get profile failed', error);
  //   }
  // }

  const handleLogout = async () => {
    try {
      await authApi.logout()
    } catch (error) {
      console.log('Logout failed', error);
    }
  }
  return (
    <div>
      <h1>Login page</h1>
      <p>Profile: {JSON.stringify(profile) || '--'}</p>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleGetProfile}>Get profile</button> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
