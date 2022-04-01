import React from 'react'
import { useSelector } from 'react-redux';

function ErrorMsg() {
	const errorMsg = useSelector((state) => state.errorMsg);

  return (
    errorMsg && 
    <div
      className='animate-wiggle fixed rounded-2xl w-full top-0 left-0 py-4 px-8 font-semibold uppercase text-4xl text-center bg-red-500/50 text-gray-100 lg:w-auto lg:top-7 lg:right-5 lg:left-auto'
      role='alert'
    >{errorMsg}
    </div>
  )
}

export default ErrorMsg