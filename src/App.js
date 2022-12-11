import React from 'react'
import './App.css'
import style from './style'
import Navber from './layout/Navber'
import {  Footer, Hero, Skills } from './components'


const App = () => {
  return (
    <>
        <div className={`${style.bg_primary} overflow-hidden w-full`}>
          <div className="">
             <div>
              <Navber />
             </div>
             <div>
                <Hero />
             </div>
             <div>
              <Skills />
             </div>
             <div>
              <Footer />
             </div>
          </div>
        </div>
    </>
  )
}

export default App