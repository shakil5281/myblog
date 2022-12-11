import React from 'react'
import style from '../style.js'
import logo from '../assets/img/logo.png'
import Navbercss from './NavberCss.js'
import {navLinks} from './contest'

const Navber = () => {
  return (
    <>
      <div className="bg-slate-900 fixed w-full">
        <div className= {`${style.container}`}>
            <div className="p-4">
                <div>
                  <div className="w-full justify-between items-center navber flex">
                    <div className={`${Navbercss.font} mx-auto lg:m-0` }>
                      <a className='flex' href="">
                      <img src={logo} alt="logo" className='w-[70px]' />
                       <span className='py-4'>Navber</span>
                      </a>
                    </div>
                    <div className='manu-items'>
                      <ul className='flex space-x-6'>
                        {navLinks.map((nav,index) => 
                          <li
                           key={nav.id}
                           className= ' transition-colors'
                           >
                            <a className={`${style.nav_link}`} href={`#${nav.id}`}>{nav.title}</a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navber