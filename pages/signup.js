import React, { useState } from "react";
// import { useRouter } from "next/router";

const Signup = () => {
  // const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // Onchange function for values
  // Updating the state by the help of name dynamically
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // OnSubmit form function
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, password2 } = user;

    // Applying validations on empty fields & Password
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      password2.trim() === ""
    ) {
      alert("Some Credentials are Missing");
    }

    if (password !== password2) alert("Passwords are not matching");

    if (password.length < 6) alert("Password length must be greater than 6");
  };

  return (
    <div className=' flex flex-col justify-center items-center px-20 py-10 mx-auto  h-screen'>
      <form
        onSubmit={onSubmit}
        className='flex flex-col bg-white shadow-lg rounded-md  sm:w-[400px] sm:max-w-full items-center justify-center'
      >
        <h1 className='text-3xl text-center p-6 rounded-t-lg text-white w-full bg-gradient-to-r from-blue-800 to-indigo-200'>
          SignUp
        </h1>
        <div className='form-control'>
          <label className='label' htmlFor='name'>
            Name
          </label>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Enter Name'
            value={user.name}
            id='name'
            onChange={onChange}
          />
        </div>
        <div className='form-control'>
          <label className='label' htmlFor='email'>
            Email
          </label>
          <input
            className='input'
            name='email'
            type='email'
            placeholder='Enter Email'
            value={user.email}
            id='email'
            onChange={onChange}
          />
        </div>
        <div className='form-control'>
          <label className='label' htmlFor='password'>
            Password
          </label>
          <input
            className='input'
            name='password'
            type='password'
            placeholder='Enter Password'
            value={user.password}
            id='password'
            onChange={onChange}
          />
        </div>
        <div className='form-control'>
          <label className='label' htmlFor='password2'>
            Confirm Password
          </label>
          <input
            className='input'
            name='password2'
            type='password'
            placeholder='Confirm Password'
            value={user.password2}
            id='password2'
            onChange={onChange}
          />
          <input
            className='cursor-pointer px-3 py-2 text-center m-3 border-none text-white bg-gradient-to-r from-indigo-300 to-blue-600 rounded-md hover:to-blue-800 active:transform active:scale-95'
            type='submit'
            value='SignUp'
          />
          <div className='p-3 flex text-md flex-col sm:flex-row'>
            Already have an Account?
            <p
              className='underline cursor-pointer text-blue-500 ml-1'
              onClick={() => router.push("/login")}
            >
              Goto Login
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
