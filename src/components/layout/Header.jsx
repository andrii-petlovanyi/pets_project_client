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
                <NavLink to='uikit'>UI Kit</NavLink>
                

            </nav>

            <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px'}}>
                <NavLink to='/'>Cabinet</NavLink>
                <NavLink to='login'>Login</NavLink>
                <NavLink to='register'>Registration</NavLink>
            </div>
        </header>
    )
}

export default Header;