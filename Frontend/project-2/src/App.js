import React from 'react'

import './App.css'

import { Header, Footer, Features, Possibility, WhatGPTkill } from './containers'
import { Navbar, Brand} from './components'


const App = () => (
  <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
      {/* <CTA /> */}
    </div>
    <WhatGPTkill />
    <Features />
    <Possibility />
    <Brand />
    {/* <Blog /> */}
    <Footer />
  </div>
)


export default App
