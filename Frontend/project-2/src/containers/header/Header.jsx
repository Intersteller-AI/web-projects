import React from 'react'
import './header.css'
import people from '../../assets/assets/people.png'
import bay from '../../assets/assets/baymax.png'
import ai from '../../assets/assets/ai.png'


const windowwidth = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;

const Header = () => {
  return (
    <div className='gpt3__header' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Predict your Health Aid with the amazing intelligence of BayMed</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          {/* <input type="email" placeholder='search email address' /> */}
          <button type='button'><a href="https://bay-med.vercel.app/">Try BayMed 🔥</a>
          </button>
        </div>
        
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
        <div className='gpt3__header-image'>
          <img src={windowwidth < 1051 ? ai : bay} alt="aio" />
        </div>
    </div>
  )
}



export default Header
