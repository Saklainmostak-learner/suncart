import React, { Suspense } from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
    return (
         <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <LoginForm />
    </Suspense>
    );
};

export default LoginPage;