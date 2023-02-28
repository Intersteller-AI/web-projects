import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets/assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[3px] hover:p-[6px] transition-all duration-500 cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2.5'>
          <span className='text-gradient'>Get</span>
        </p>
        <img className='w-[23px] h-[23px]' src={arrowUp} alt="arrow" />
      </div>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  </div>
)

export default GetStarted
