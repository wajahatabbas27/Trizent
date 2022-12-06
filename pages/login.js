import React, { useState } from "react";
// import { useRouter } from "next/router";

const Login = () => {
  // const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //   OnChange function
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  //   OnSubmit function with validations
  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = user;
    if (email.trim() === "" || password.trim() === "")
      alert("Fill the fields to login");
  };
  return (
    <div className='flex flex-col items-center justify-center px-20 py-10 mx-auto h-screen '>
      <form
        onSubmit={onSubmit}
        className='flex flex-col sm:w-[400px] sm:max-w-full mt-20 items-center justify-center bg-white shadow-lg'
      >
        <h1 className='text-3xl text-center text-white bg-gradient-to-r from-blue-800 to-indigo-200 w-full rounded-t-lg p-6'>
          Login
        </h1>
        <div className='form-control'>
          <label className='label' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Email'
            onChange={onChange}
            className='input'
          />
        </div>
        <div className='form-control'>
          <label className='label' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
            onChange={onChange}
            className='input'
          />
          <input
            type='submit'
            value='Login'
            className='cursor-pointer  px-3 py-2 text-center m-3 border-none text-white bg-gradient-to-r from-indigo-300 to-blue-600 rounded-md hover:to-blue-800 active:transform active:scale-95'
          />
          <div className='text-md flex flex-col md:flex-row p-3'>
            Haven&apos;t registered yet?
            <p
              className='text-blue-500 underline cursor-pointer ml-1'
              onClick={() => router.push("/signup")}
            >
              Register yourself
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
