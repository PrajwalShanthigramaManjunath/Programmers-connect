import React from 'react';
import { Button } from '@storybook/react/demo';
import { Login } from '../src/components/auth/Login';

export default { title: 'Authentication' };

export const UserLogin = () => Login;

export const withEmoji = () => (
  <Button>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </Button>
);
