import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
}




/*
// PROJECT IMPORTS
import LoginPage from 'views/auth/auth1/Login';

// ================================|| LOGIN ||================================ //

const Login = () => {
  return <LoginPage />;
};

export default Login;
*/