import React, { useState } from 'react'
import { Apidata } from '../../Apidata';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';


const LoginForm = ({ onLoginSuccess }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Email is", email);
  //   console.log("Password is", password);
  //   setEmail('')
  //   setPassword('')
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Apidata(email, password);
      if (response.success) {
        toast("Welcome to Task Manager Dashboard")
        onLoginSuccess(response.user); 
        
      }
    } catch (error) {
      // alert(error.message);
      toast("Invalid email or password")
      setError(error.message);
    }

    setEmail('');
    setPassword('');
  };


  return (
    <div>
      <Header />
      <ToastContainer />
    <div className='flex h-full mt-20 w-screen items-center justify-center'>
      <div className="rounded-xl p-20 bg-[#1f1f1f]">
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
          className='flex flex-col items-center justify-center'>

          <h2 className='text-5xl font-bold text-white'>Login</h2>

          <input required
            className='w-[250px] border-2 mt-15 py-1 pl-8 rounded-md text-sm text-black outline-none bg-white placeholder:text-gray-500'
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />

          <input required
            className='w-[250px] border-2 py-1 mt-4 pl-8 rounded-md text-sm text-black outline-none bg-white placeholder:text-gray-500'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }} />

          <button className='w-[100px] bg-blue-600 hover:bg-blue-800 text-white font-medium cursor-pointer py-2 mt-4 rounded-md text-sm outline-none'>Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default LoginForm
