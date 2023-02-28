import React from 'react'
import styles, { layout } from '../styles'
import { bill, google, apple } from '../assets/assets'


const Billing = () => {
  return (
    <div className={`${layout.div} mt-10 items-center flex-col-reverse`}>
      <div className={`flex-1 w-[80%] flex md:mt-0 mt-14 items-center justify-center relative`}>
        <img className='w-full md:h-full' src={bill} alt="bill" />
        <div className='absolute z-[3] -left-[50%] top-0 w-1/2 h-1/2 rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-[50%] bottom-0 w-1/2 h-1/2 rounded-full pink__gradient'/>
      </div>

      <div className={`flex-1 flex items-center justify-center text-center md:text-left`}>
        <div className='flex flex-col items-center md:items-start'>
          <h1 className={`text-[36px] leading-[44px] text-white ss:text-[48px] ss:leading-[68px] font-semibold font-poppins`}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h1>
          <p className={`font-poppins font-normal text-dimWhite ss:text-[16px] ss:leading-[30.8px] max-w-[470px] mt-5 text-[14px] leading-[20px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className='flex flex-1 mt-10 space-x-8'>
            <img className='w-1/2 hover:border-blue-700 border-[3px] hover:cursor-pointer rounded-[10px] border-transparent' src={apple} alt="apple" />
            <img className='w-1/2 hover:border-blue-700 border-[3px] hover:cursor-pointer rounded-[10px] border-transparent' src={google} alt="google" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
