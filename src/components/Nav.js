import React from 'react';
import navlinks from '../data/navlinks'
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const style = { textDecoration: 'none', color: '#ddd', padding: '1%' }

    return (
        <div>
            <nav className='nav'>
                <ul className='nav__list'>
                    {navlinks.map((link, idx) =>
                        <NavLink
                            key={idx}
                            exact to={link.path}
                            activeClassName={link.activeClassName}
                            style={style} >
                            {link.title}
                        </NavLink>)}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;