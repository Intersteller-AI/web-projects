import React from 'react'
import { card } from '../assets/assets'
import Button from './Button'
import styles, {layout} from '../styles'

const CardDeals = () => (
  <div className={`${layout.div} mt-10 items-center flex-col`}>
    <div className={`flex-1 flex flex-col items-center text-center md:text-start md:items-start`}>
      <h1 className={`text-[36px] leading-[44px] text-white ss:text-[48px] ss:leading-[68px] font-semibold font-poppins`}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h1>
      <p className={`font-poppins font-normal text-dimWhite ss:text-[16px] ss:leading-[30.8px] max-w-[500px] mt-5 text-[14px] leading-[20px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button styles='mt-10' />
    </div>
    <div className={`flex items-center justify-center flex-1 relative md:mt-0 mt-10`}>
      <img className='w-[90%]' src={card} alt="" />
    </div>
  </div>
)


export default CardDeals