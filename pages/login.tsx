import * as React from 'react';

import { authApi } from '@/api/auth-api';

export default function LoginPage () {
  const handleLogin = async () => {
    try {
      await authApi.login({
        username: 'Hai123',
        password: '123abc'
      })
    } catch (error) {
      console.log('Login failed', error);
    }
  }

  const handleGetProfile = async () => {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('Get profile failed', error);
    }
  }

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

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile}>Get profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
