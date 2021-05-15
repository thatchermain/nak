import React from 'react';
import logo from '../images/Logo.png';
import './Nav.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className='nav'>
                <Router>
                    <ul className='nav__list'>
                        <NavLink exact to='/' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Strona główna</NavLink>
                        <NavLink to='/stacja' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Stacja Kontroli</NavLink>
                        <NavLink to='/klima' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%' }} className='nav__item' >Klimatyzacja</NavLink>
                        <NavLink to='/mechanika' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Mechanika</NavLink>
                        <NavLink to='/galeria' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Galeria</NavLink>
                        <NavLink to='/kontakt' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Kontakt</NavLink>
                    </ul>
                </Router>
            </nav>
        </div>
    )
}

export default Nav;