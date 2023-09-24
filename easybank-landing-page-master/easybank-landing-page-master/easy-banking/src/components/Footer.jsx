import React from 'react'
import RequestBtn from './RequestBtn'

const Footer = () => {
  return (
    <div className="bg-Dark-Blue w-full  text-Very-Light-Gray">
      <div className='w-[85%] mx-auto my-0 flex py-[50px] justify-between'>
        <div className='flex flex-col gap-[45px]'>
           <img src="../../public/images/logo_footer.svg" alt="eazy_banking_logo" className='fill-White' />
           <div className='flex'>
            <img src="../../public/images/icon-facebook.svg" alt="facebook icon" />
             <img src="../../public/images/icon-youtube.svg" alt="youtube icon" />
            <img src="../../public/images/icon-twitter.svg" alt="twitter icon" />
             <img src="../../public/images/icon-pinterest.svg" alt="pinterst icon" />
              <img src="../../public/images/icon-instagram.svg" alt="facebook icon" />
           </div>
        </div>
         <ul className='flex flex-col gap-[15px]'>
          <li>About Us</li>
         <li> Contact</li>
          <li>Blog</li>
          </ul>
           <ul className='flex flex-col gap-[15px]'>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
  

            <div className='flex flex-col gap-[25px]'>
            <RequestBtn />

            <p className='text-Grayish-Blue'>© Easybank. All Rights Reserved </p>
            </div>
            </div> 
    </div>
  )
}

export default Footer