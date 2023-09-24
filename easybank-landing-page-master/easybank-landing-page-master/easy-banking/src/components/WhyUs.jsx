import React from 'react'

const WhyUs = () => {
  return (
    <div className="bg-Light-Grayish-Blue mt-[-20vh]">
        <div className='w-[85%] mx-auto my-0 py-[80px] flex flex-col gap-[30px]'>
            <h2 className='text-Dark-Blue text-[40px] leading-[45px] '>Why choose Easybank?</h2>
            <p className='w-[65%]'>We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.</p>

            <div className='flex gap-[2 0px]'>
                <div className='flex flex-col gap-[20px]'>
                    <img src="../../public/images/icon-online.svg" alt="Online_banking_icon" className='w-[28%]'/>
                    <h4 className='text-Dark-Blue text-[20px]'> Online Banking </h4>
                   <p> Our modern web and mobile applications allow you to keep track of your finances 
                    wherever you are in the world.</p>
                </div>

                    <div className='flex flex-col gap-[20px]'>
                         <img src="../../public/images/icon-budgeting.svg" alt="Simple_budgeting_icon" className='w-[28%]'/>
                         <h4 className='text-Dark-Blue text-[20px]'>Simple Budgeting</h4>
                        <p>See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.</p>
                    </div>

                    <div className='flex flex-col gap-[20px]'>
                         <img src="../../public/images/icon-onboarding.svg" alt="Fast_onboarding_icon" className='w-[28%]'/>
                         <h4 className='text-Dark-Blue text-[20px]'>Fast Onboarding</h4>
                       <p> We don’t do branches. Open your account in minutes online and start taking control 
                        of your finances right away.</p>
                    </div>

                    <div className='flex flex-col gap-[20px]'>
                         <img src="../../public/images/icon-api.svg" alt="open_api_icon" className='w-[28%]'/>
                         <h4 className='text-Dark-Blue text-[20px]'>Open API</h4>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.</p>
                    </div>
  </div>
  </div>
    </div>
  )
}

export default WhyUs