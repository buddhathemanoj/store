import React, { useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { IoLogoApple } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    if (!phoneNumber) {
      setPhoneNumberError('Phone Number is required');
    } else {
      setPhoneNumberError('');
    }

    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (phoneNumber && password) {
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen pl-17 pr-8 pt-2 pb-6 bg-white text-lg">
      <GiShoppingCart className="text-4xl mb-4" />
      <p className="text-center text-black font-bold text-lg">Welcome to our</p>
      <p className="text-center text-green-500 font-bold text-lg">E-Grocery</p>
      <div className="w-64">
        <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <div className="mb-4">
          <input
            type="tel"
            id="phoneNumber"
            pattern="[0-9]*"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`w-full p-2 border rounded ${phoneNumberError ? 'border-red-400' : 'border-gray-300'}`}
          />
          {phoneNumberError && <p className="text-red-500 text-sm mt-1">{phoneNumberError}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border rounded ${passwordError ? 'border-red-400' : 'border-gray-100'}`}
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>
        <div className="text-right mb-4">
         <span className="text-green-700 text-xs font-bold mb-2 cursor-pointer">Forgot Password?</span>
        </div>
        <button onClick={handleLogin} className="w-full bg-green-500 text-white px-4 py-2 text-sm rounded-md mb-4">
          Login
        </button>
        <div className="flex">
          <button className="flex items-center justify-center w-full border border-red-500 text-red p-2 font-bold border-radius-100 text-sm rounded mr-2 hover:border-blue-100 hover:bg-blue-100">
            <FcGoogle className="mr-3" />
            Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-500 text-black p-2 font-bold border-radius-100 text-sm rounded hover:border-blue-100 hover:bg-blue-100">
            <IoLogoApple className="mr-3" />
            Apple
          </button>
        </div>
        <div className="text-center mt-3">
          <span className="text-gray-500 cursor-pointer text-sm">Don't have an account?</span>
          <span className="text-green-700 font-bold cursor-pointer text-sm ml-1 rounded">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
