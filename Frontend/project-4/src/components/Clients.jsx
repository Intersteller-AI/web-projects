import React from 'react'

import { clients } from '../constants'

const Clients = () => (
  <div className='flex flex-wrap my-2 sm:my-16 justify-center'>
    {clients.map((val, index) => (
      <div className={`w-[192px] h-[60px] ${index !== clients.length - 1 ? 'sm:mr-36' : 'sm:mr-0'}`} key={val.id}>
        <img className='w-full h-full object-contain' src={val.logo} alt="client" />
      </div>
    ))}
  </div>
)


export default Clients