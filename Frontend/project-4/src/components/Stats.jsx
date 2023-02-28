import React from 'react'
import styles from '../styles'
import { stats } from '../constants'

const Stats = () => (
  <div className={`${styles.paddingX} w-full mt-10 flex flex-wrap justify-center`}>
    {stats.map((val, index) => (
      <div key={val.id} className='flex items-center justify-center font-poppins'>
        <div className={`flex items-center mx-14 space-x-4 justify-between`}>
          <h4 className={`font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white`}>{val.value}</h4>
          <p className='xs:text-[20px] text-[15px] ml-2 text-gradient font-normal xs:leading-[26px] leading-[21px]' id={val.title + val.id}>{val.title}</p>
        </div>
        <div className={`${index !== stats.length - 1 ? 'w-[1px]' : 'w-0'} h-1/5 hidden lg:block bg-dimWhite`}></div>
      </div>
    ))
    }
  </div>
)


export default Stats