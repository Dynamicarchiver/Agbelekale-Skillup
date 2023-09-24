import React from 'react'
import { Link } from 'react-router-dom'
import RequestBtn from './RequestBtn'

const Navbar = () => {
  return (
    <div className="bg-White ">
    <nav className='flex justify-between w-[85%] mx-auto my-0 py-[12px]'>
         <img src="/images/logo.svg" alt="eazy_banking_logo" className='h-full self-center' />
         <ul className='flex gap-[20px] self-center '>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link> </li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/careers'>Careers</Link></li>
         </ul>
        <RequestBtn />
    </nav>
    </div>
  )
}

export default Navbar