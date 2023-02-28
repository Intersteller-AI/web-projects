import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../styles'
import Button from './Button'


const FeatureCard = ({ icon, title, content , index}) => (
  <div className={`flex flex-row p-6 ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card rounded-[20px] transition-all duration-1000`}>
    <div className={`w-[64px] h-[64px] ${styles.flexCenter} bg-dimBlue rounded-full`}>
      <img className='w-1/2 h-1/2 object-contain' src={icon} alt="icon" />
    </div>
    <div className={`flex flex-col flex-1 ml-3`}>
      <h4 className='text-white font-semibold mb-1 text-[18px] leading-[23px]'>{title}</h4>
      <p className='text-white font-normal mb-1 text-[16px] leading-[23px]'>{content}</p>
    </div>
  </div>
)

const Business = () => (
  <div className={`${layout.div} mt-10 items-center flex-col`}>
    <div className={`flex-1 flex flex-col items-center text-center md:text-start md:items-start`}>
      <h1 className={`${styles.heading2}`}>You do the business,<br className='sm:block hidden' />we'll handle the money.</h1>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button styles='mt-10' />
    </div>
    <div className={`flex flex-col items-start mt-10 flex-1 relative`}>
      {features.map((val, index) => (
          <FeatureCard key={val.id} {...val} index={index} />        
      ))}
    </div>
  </div>
)


export default Business