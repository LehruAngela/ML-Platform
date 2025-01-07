import React from 'react';
import logo from '../../images/ml-logo.jpeg';

export default function Login({ onClickSignUp, onShowDashboard }: any) {
  return (
    <div className="flex min-h-screen bg-gray-50 flex-col px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-16 w-auto" src={logo} alt="company logo" />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        {/* <form className="space-y-6 " action="/dashboard"> */}
        <div>

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 text-left">Email address</label>
            <div className="mt-2">
              <input type="email" name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div className='mt-4'>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input type="password" name="password" id="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div className="mt-6">
            <button onClick={onShowDashboard} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm/6 text-gray-500">
          Not a member?
          <a href="#" onClick={onClickSignUp} className="ml-1 font-semibold text-indigo-600 hover:text-indigo-500">Sign Up</a>
        </p>
      </div>
      </div>
    </div>
  );
}
