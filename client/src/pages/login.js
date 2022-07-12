import React, { useState, useRef } from 'react';
import Nav from '../components/home/nav';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN } from '../utils/mutations';

function LoginSignup () {

  const [loginToggle, setloginToggle] = useState(false);
  const toggleElement = useRef();
  const toggleBtn = useRef();
  
  function handleToggle() {
    if(loginToggle === false) {
      toggleElement.current.classList.toggle('toggleElement1');
      toggleElement.current.classList.toggle('toggleElement2');
      toggleBtn.current.classList.toggle('toggleBtn1');
      toggleBtn.current.classList.toggle('toggleBtn2');
      setloginToggle(true);
      return;
    }
    if(loginToggle === true) {
      toggleElement.current.classList.toggle('toggleElement1');
      toggleElement.current.classList.toggle('toggleElement2');
      toggleBtn.current.classList.toggle('toggleBtn1');
      toggleBtn.current.classList.toggle('toggleBtn2');
      setloginToggle(false);
      return;
    }

    return;
  }

  // LOGIN FUNCTIONALITY
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  });
  const [login] = useMutation(LOGIN);

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    // console.log('login button clicked');
    // try {
    //   const mutationResponse = await login({
    //     variables: {
    //       email: loginFormState.email,
    //       password: loginFormState.password,
    //     },
    //   });
    //   const token = mutationResponse.data.login.token;
    //   Auth.login(token);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });
    console.log(loginFormState);
  };

  //SIGNUP FUNCTIONALITY
  // const [signupFormState, setSignupFormState] = useState({
  //   uname: "",
  //   eml: "",
  //   psw: "",
  // });
  // const [addUser] = useMutation(ADD_USER);

  // const handleSignupFormSubmit = async (event) => {
  //   event.preventDefault();
  //   const mutationResponse = await addUser({
  //     variables: {
  //       userName: signupFormState.uname,
  //       email: signupFormState.eml,
  //       password: signupFormState.psw,
  //     },
  //   });
  //   const token = mutationResponse.data.addUser.token;
  //   Auth.login(token);
  // };

  // const handleSignupChange = (event) => {
  //   const { name, value } = event.target;
  //   setSignupFormState({
  //     ...signupFormState,
  //     [name]: value,
  //   });
  //   console.log(signupFormState);
  // };

  return (
    <>
      <Nav />
      <div className='bg-gray-100 w-full h-screen'>
        <div className='flex flex-wrap bg-white m-auto mt-5 rounded-xl relative w-5/6'>
          <div className='w-1/2 p-5'>
            <h1>Login</h1>
            <div>
              <p className='w-full text-start'>Email</p>
              <input type="text" placeholder="Enter Email" name="email" onChange={handleLoginChange} className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <p className='w-full text-start'>Password</p>
              <input type="password" placeholder="Enter Password" name="password" onChange={handleLoginChange} className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <button type="submit" className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4' onClick={handleLoginFormSubmit}>Login</button>
            </div>
          </div>
          <div className='w-1/2 p-5'>
            <h1 className='font-bold text-xl'>Signup</h1>
            <div>
            <p className='w-full text-start'>Username</p>
              <input type="text" placeholder="Enter Username" name="uname" className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <p className='w-full text-start'>Email</p>
              <input type="text" placeholder="Enter Email" name="eml" className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <p className='w-full text-start'>Password</p>
              <input type="password" placeholder="Enter Password" name="psw" className='w-full p-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'/>

              <button type="submit" className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4'>Sign Up</button>
            </div>
          </div>
          <div ref={toggleElement} className='toggleElement1 flex justify-around items-center bg-gray-700'>
            <button ref={toggleBtn} onClick={() =>handleToggle()} className='toggleBtn1 text-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2'>
              {loginToggle ? (<p>Click to Signup</p>):(<p>Click to Login</p>)}
              </button>
          </div>
      </div>
      </div>
    </>

  )
}

export default LoginSignup;