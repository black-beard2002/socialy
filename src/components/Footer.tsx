import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
const Footer = () => {
  return (
    

<footer className="bg-slate-100 rounded-lg shadow-sm dark:bg-zinc-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-0.5 rtl:space-x-reverse">
                <Image width={40} height={100} src={logo} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ocialy</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <span  className=" me-4 md:me-6 uppercase font-mono">Making the world a small country</span>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Ahmad Salemeh</a></span>
    </div>
</footer>


  )
}

export default Footer