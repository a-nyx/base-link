import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center">
      <button
        className="btn"
        onClick={() => signIn("google", undefined, { prompt: "login" })}>
        <FcGoogle fontSize="32px" />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
