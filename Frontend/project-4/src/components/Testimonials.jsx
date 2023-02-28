import React from 'react'

import { feedback } from '../constants'
import styles, { layout } from '../styles'
import { quotes } from '../assets/assets'

const TestimonialFeature = ({ content, img, name, title, index }) => (
  <div className='flex flex-col py-[56px] px-[36px] justify-between space-y-[40px] feedback-card rounded-[20px]'>
    <img className='w-[42px] h-[27px]' src={quotes} alt="useImg" />
    <p className='w-[280px] text-[18px] leading-[32px]'>{content}</p>
    <div className='flex items-center'>
      <img className='w-[48px] h-[48px]' src={img} alt="" />
      <div className='ml-4'>
        <h4 className='text-[20px] leading-[32px] font-medium'>{name}</h4>
        <p className='text-dimWhite text-[16px] leading-[24px] font-light'>{title}</p>
      </div>
    </div>
  </div>
)
const Testimonials = () => {
  return (
    <div className={`sm:py-16 py-6 text-white flex flex-col`}>
      <div className='flex md:flex-row flex-col flex-1 items-center text-center md:text-left'>
        <h1 className='text-[32px] leading-[41px] sm:text-[48px] sm:leading-[81px] max-w-[470px] font-semibold font-poppins'>What people are saying about us</h1>
        <p className='mt-3 text-dimWhite text-[14px] leading-[21px] sm:text-[18px] max-w-[450px] sm:leading-[32px] font-normal font-poppins ml-0 md:ml-36'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='flex flex-wrap mt-4 sm:mt-20 space-x-0 space-y-2 sm:space-y-8 lg:space-y-0 md:space-x-14 relative'>
        <div className='absolute z-[0] -right-[40%] w-[60%] h-[60%] rounded-full blue__gradient' />
        {feedback.map((val, index) => (
          <TestimonialFeature key={val.id} {...val} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials