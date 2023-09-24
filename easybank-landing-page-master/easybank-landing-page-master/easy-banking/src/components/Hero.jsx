import React from 'react'
import RequestBtn from './RequestBtn'

const Hero = () => {
  return (
   <div className='pl-[10%] bg-Very-Light-Gray h-[120vh] w-full flex overflow-hidden text-[18px] text-Grayish-Blue'>
    <div className='w-[40%] mt-[25vh] flex flex-col gap-[20px]'>
      <h3 className='text-Dark-Blue font-[600] text-[40px] leading-[45px] pr-[40px]'>Next generation digital banking</h3>
      <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.
</p>
       <RequestBtn />
    </div>
    <div className='bg-[url("/images/bg-intro-desktop.svg")] bg-left relative top-[-125px] w-[65%]'>
      <div className='h-full'>
      <img src="/images/image-mockups.png" alt='mockup_image' className='absolute right-[-150px] h-[140vh]' />
      </div>
    </div>
   </div>
  )
}

export default Hero 