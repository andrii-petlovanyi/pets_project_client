import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
            <div style={{ marginRight: '30px' }}>Logo</div>
            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to='news'>News</NavLink>
                <NavLink to='notices'>Find pet</NavLink>
                <NavLink to='partners'>Our friends</NavLink>
            </nav>

            <div style={{ marginLeft: 'auto' }}>
                <NavLink to='/'>Cabinet</NavLink>
            </div>
        </header>
    )
}

export default Header;