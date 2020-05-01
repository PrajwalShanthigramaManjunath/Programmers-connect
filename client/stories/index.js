import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { MemoryRouter } from 'react-router';

storiesOf('Home Page/auth', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Login
      action={(login) => (
        <button className='btn w-100 btn-primary'>Test</button>
      )}
    />
  ))
  .add('exception', () => {
    return (
      <Login
        action={(login) => (
          <button className='btn w-100 btn-primary'>Test</button>
        )}
      />
    );
  });
