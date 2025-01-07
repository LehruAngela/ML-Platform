import React, { useState } from 'react';
import logo from '../../images/ml-logo.jpeg';

export default function SignUp({ onClickLogin, onShowDashboard }: any) {
  const [ showIndividual, setShowIndividual ] = useState(true);
  const [ showTherapist, setShowTherapist ] = useState(false);
  const [ showOrganization, setShowOrganization ] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-16 w-auto" src={logo} alt="company logo" />
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or
            <a href="#"
              onClick={onClickLogin}
                className="ml-1 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                login to your account
            </a>
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white">
            {/* <form method="POST" action="#"> */}
            <div>

              <div className="grid grid-cols-3 divide-x divide-sky-500 divide-x-2 border-solid border-2 border-sky-500 p-2">
                <a className="text-center" href="#" onClick={() => {
                  setShowIndividual(true);
                  setShowTherapist(false);
                  setShowOrganization(false);
                }}>Individual</a>
                <a className="text-center" href="#" onClick={() => {
                  setShowTherapist(true);
                  setShowIndividual(false);
                  setShowOrganization(false)
                  
                  }}>Therapist</a>
                <a className="text-center" href="#" onClick={() => {
                  setShowOrganization(true)
                  setShowIndividual(false)
                  setShowTherapist(false)
                  
                  }}>Organization</a>
              </div>
              <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
               {showOrganization ? (
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-5 text-left text-gray-700">Organization name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <input id="name" name="name" placeholder="Organization name" type="text"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clip-rule="evenodd">
                            </path>
                        </svg>
                    </div>
                </div>
                  </div>

               ) : (
                
                <div className='flex justify-between'>
                <div className='mr-3'>
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-left text-gray-700">First Name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input id="name" name="name" placeholder="First Name" type="text"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-left text-gray-700">Last Name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input id="name" name="name" placeholder="Last Name" type="text" 
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                </div>)}


                <div className='mt-6'>
                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-left text-gray-700">Username</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input id="name" name="name" placeholder="Username" type="text" 
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-left leading-5 text-gray-700">
                        {showOrganization ? 'Work Email': 'Email address'}
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input id="email" name="email" placeholder="user@example.com" type="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {showTherapist && (
                <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium text-left leading-5 text-gray-700">
                    Category
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                </div>
                )}

                <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-left leading-5 text-gray-700">
                        Country
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-left leading-5 text-gray-700">
                        Location
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="password" className="block text-sm text-left font-medium leading-5 text-gray-700">
                        Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" type="password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="password_confirmation" className="block text-sm text-left font-medium leading-5 text-gray-700">
                        Confirm Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="password_confirmation" name="password_confirmation" type="password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button 
                            onClick={onShowDashboard}
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Create account
                        </button>
                    </span>
                </div>
                </div>
            </div>

        </div>
    </div>
</div>
  );
}
