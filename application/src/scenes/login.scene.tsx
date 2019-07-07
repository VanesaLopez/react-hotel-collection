import * as React from 'react';
import { Link } from 'react-router-dom';
import { CenteredLayout, AppLayout } from 'layout';
import { routesLinks } from 'core';
import { LoginContainer } from 'pods/login';

export const LoginScene = () => {
  return (
    <CenteredLayout>
      <LoginContainer/>
    </CenteredLayout>
  )
}
