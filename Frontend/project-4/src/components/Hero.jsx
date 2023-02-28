import React from 'react'

import GetStarted from './GetStarted'
import { discount, robot, arrowUp } from '../assets/assets'
import styles from '../styles'


const Hero = () => (
  <div id='home' className={`flex w-full flex-col text-white md:flex-row ${styles.paddingY}`}>
    <div className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img className='w-[26.67px] h-[26.66px]' src={discount} alt="discount" />
        <p className={styles.paragraph}>
          <span className='text-white'>20%</span> Discount For {' '}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className={`flex-1 font-poppins font-semibold text-[52px] text-white ss:text-[72px] ss:leading-[100px]`}>
          The Next <br className='sm:block hidden' /> <span className='text-gradient'>Generation</span>
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <h1 className={`font-poppins font-semibold text-[52px] text-white ss:text-[68px] ss:leading-[100px]`}>
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[483px]`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
        We examine annual percentage rates, annual fees.</p>
    </div>
    <div className={`flex-1 flex md:my-0 my-10 relative ${styles.flexCenter}`}>
      <img className='w-full h-full relative z-[5]' src={robot} alt="robot" />
      <div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient'></div>
      <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter} mt-14`}>
      <GetStarted/>
    </div>
  </div>
)


export default Hero