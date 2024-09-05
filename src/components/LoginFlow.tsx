// components/LoginFlow.js
import { useState, useEffect } from 'react';
import { SignIn, useAuth } from "@clerk/nextjs";
import LoginPage from 'views/authentication/Login';

// ================================|| LOGIN FLOW ||================================ //

const LoginFlow = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const [isSignInPage, setIsSignInPage] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        setIsSignInPage(false);
      }
    }
  }, [isSignedIn, isLoaded]);

  return (
    <main className="flex h-screen w-full items-center justify-center">
      {isSignInPage ? <SignIn /> : <LoginPage />}
    </main>
  );
};

export default LoginFlow;
