import React from 'react';
import '../scss/NavbarItem.scss';

function NavbarItem({ selected, title}) {
    return (
        <div className={`navbarItem ${selected && "selected"}`}>
            <h2>{title}</h2>
        </div>
    )
}

export default NavbarItem
