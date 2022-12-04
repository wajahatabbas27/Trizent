import { useRouter } from "next/router";
import React from "react";

const SignUpButton = () => {
  const router = useRouter();
  return (
    <button
      className='text-lg font-semibold hover:outline-none border border-blue-800 rounded-xl px-4 py-1 hover:transform hover:bg-blue-500 active:outline-none active:transform active:scale-95'
      onClick={() => router.push("/signup")}
    >
      SignUp
    </button>
  );
};

export default SignUpButton;
