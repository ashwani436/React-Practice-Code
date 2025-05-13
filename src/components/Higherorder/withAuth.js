import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => (props) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? <WrappedComponent {...props} /> : <Navigate to="/login" replace />;
};
export default withAuth;
