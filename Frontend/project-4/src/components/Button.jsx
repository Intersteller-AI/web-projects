import React from 'react'


const Button = ({styles}) => {
  return (
    <button type='button' className={`bg-blue-gradient py-[10px] px-[20px] rounded-[8px] font-semibold outline-none font-poppins ${styles}`}>
      Get Started
    </button>
  )
}

export default Button