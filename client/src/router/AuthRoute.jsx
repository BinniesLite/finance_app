import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import LayoutWrapper from '@/components/layout/wrapper/LayoutWrapper';

const AuthRoute = ({ component: Component, noLayoutWrap = false }) => {
  const { user } = useAuthContext();

  if (!user) {
    // Redirect to the home page if there is no user
    return <Navigate to='/' />;
  }

  return (
    <>
      {noLayoutWrap ? (
        <Component />
      ) : (
        <LayoutWrapper>
          <Component />
        </LayoutWrapper>
      )}
    </>
  );
};

export default AuthRoute;
