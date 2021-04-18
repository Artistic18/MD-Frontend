import React from 'react'
import HomeIcon from '../assets/home.svg'
import AboutIcon from '../assets/about.svg'

const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <img src={HomeIcon} alt='home'/>,
        class: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <img src={AboutIcon} alt='about'/>,
        class: 'nav-text'
    },
]

export default NavBarData;
