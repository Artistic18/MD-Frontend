import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as NavIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import NavBarData from './NavBarData'
import '../styles/Nav.css'
import { IconContext } from 'react-icons'

function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='bars'>
            <NavIcons.FaBars onClick={showSidebar}/>
          </Link>

                  <li id='icon1' className={NavBarData[0].class}>
                    <Link to={NavBarData[0].path}>
                      {NavBarData[0].icon}
                    </Link>
                  </li>
                  <li id='icon2' className={NavBarData[1].class}>
                    <Link to={NavBarData[1].path}>
                      {NavBarData[1].icon}
                    </Link>
                  </li>

          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                  <Link to='#' className='bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                  <span className='roll'>1829152</span>
              </li>
              {NavBarData.map((value, index) => {
                return (
                  <li key={index} className={value.class}>
                    <Link to={value.path}>
                      {value.icon}
                      <span> {value.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          </IconContext.Provider>
        </>
    )
}

export default SideNav
