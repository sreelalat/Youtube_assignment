import React from 'react'
import NavbarItem from './NavbarItem'
import '../scss/Navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <NavbarItem selected title="HOME" />
            <NavbarItem title="TRENDING" />
            <NavbarItem title="SUBSCRIPTIONS" />
        </div>
    )
}

export default Navbar
