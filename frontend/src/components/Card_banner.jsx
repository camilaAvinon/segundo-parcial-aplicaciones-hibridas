import React from 'react'

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Card_banner = () => {
  return (
    <Button  className="fixed bottom-0 left-[96%] transform -translate-x-1/2 m-2 p-2  rounded-full">
    <svg className="w-6 h-6 text-tertiary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 18 18">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
  </svg>
  </Button>
  )
}

export default Card_banner

