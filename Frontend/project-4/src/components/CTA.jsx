import React from 'react'

import Button from './Button'

const CTA = () => (
  <div className='flex justify-between p-4 flex-col ss:flex-row items-center my-10 sm:my-32 ss:p-[70px] cta__blur rounded-[20px]'>
    <div className='flex flex-col text-white items-center ss:items-start justify-center text-center ss:text-left'>
      <h1 className='sm:w-[670px] text-[32px] ss:text-[48px] ss:leading-[67px] font-semibold'>Let's try our service now!</h1>
      <p className='sm:w-[445px] text-[16px] my-6 ss:my-0 ss:text-[18px] ss:leading-[28px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <Button/>
  </div>
)


export default CTA