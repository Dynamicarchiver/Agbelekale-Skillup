import React from 'react'

const Latest = () => {
  return (
    <div className='w-full'>
        <div className='w-[85%] mx-auto my-0 flex flex-col py-[100px] gap-[20px]'>
            <h4 className='text-Dark-Blue text-[40px]'>Latest Articles</h4>

            <div className='flex gap-[25px]'>
                <div className='flex flex-col gap-[20px] basis-[25%] flex-grow-1'>
                    <img src='../../public/images/image-currency.jpg' alt='currency image' className='h-[200px] rounded-t-2xl'/>
                    <p className='px-[20px]'>By Claire Robinson</p>
                    <h4 className='text-Dark-Blue text-[20px] leading-[20px] px-[20px]'>Receive money in any currency with no fees </h4>
                     <p className='px-[20px]'>The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …</p>
                </div>

                <div className='flex flex-col gap-[20px] basis-[25%] flex-grow-1'>
                    <img src='../../public/images/image-restaurant.jpg' alt='resturant image' className='h-[200px] rounded-t-2xl'/>
                    <p className='px-[20px]'>By Wilson Hutton</p>
                      <h4 className='text-Dark-Blue text-[20px] leading-[20px] px-[20px]'>Treat yourself without worrying about money</h4>
                    <p className='px-[20px]'>Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …</p>
                </div>

                <div className='flex flex-col gap-[20px] basis-[25%] flex-grow-1'>
                    <img src='../../public/images/image-plane.jpg' alt='plane image' className='h-[200px] rounded-t-2xl'/>
                    <p className='px-[20px]'>By Wilson Hutton</p>
                     <h4 className='text-Dark-Blue text-[20px] leading-[20px] px-[20px]'>Take your Easybank card wherever you go</h4>
                    <p className='px-[20px]'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …</p>
                </div>

                <div className='flex flex-col gap-[20px] basis-[25%] flex-grow-1'>
                     <img src='../../public/images/image-confetti.jpg' alt='conffetti image' className='h-[200px] rounded-t-2xl'/>
                 <p className='px-[20px]'>By Claire Robinson</p>
                 <h4 className='text-Dark-Blue text-[20px] leading-[20px] px-[20px]'>Our invite-only Beta accounts are now live!</h4>
                <p className='px-[20px]'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                It’s easy to request an invite through the site ...</p>
                </div>
                </div>

        </div>
    </div>
  )
}

export default Latest