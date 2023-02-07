import React from "react"
import { NavLink, Link } from "react-router-dom"
import Logo from '../../utils/assets/logo.svg'
import '../../utils/style/header.css'

function Header(logo) {

    let activeStyle = {textDecoration:"underline"}

    return (

        <div key={logo} className='header_container'>
            <Link to='/'>
                <img src={Logo} alt='logo' className='logo'/>
            </Link>

        <nav key={logo.nav} className='nav_container'>
            <NavLink to='/' className='nav' style={({isActive}) => isActive ? activeStyle : undefined}>Accueil</NavLink>
            <NavLink to='/a-propos' className='nav' style={({isActive}) => isActive ? activeStyle : undefined}>A Propos</NavLink>
        </nav>
        </div>
    )
}

export default Header