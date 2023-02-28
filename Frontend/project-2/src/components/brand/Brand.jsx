import React from 'react'
import './brand.css'
import { googleimg, slack, atlassian, dropbox, shopify } from './imports'


const Brand = () => (
  <div className='gpt3__brand section__padding'>
    <div>
      <img src={googleimg} alt="google" />
    </div>
    <div>
      <img src={slack} alt="slack" />
    </div>
    <div>
      <img src={atlassian} alt="atlassian" />
    </div>
    <div>
      <img src={dropbox} alt="dropbox" />
    </div>
    <div>
      <img src={shopify} alt="shopify" />
    </div>
  </div>
)


export default Brand