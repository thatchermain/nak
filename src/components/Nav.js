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
                        <NavLink exact to='/stacja' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Stacja Kontroli</NavLink>
                        <NavLink exact to='/klima' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%' }} className='nav__item' >Klimatyzacja</NavLink>
                        <NavLink exact to='/mechanika' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Mechanika</NavLink>
                        <NavLink exact to='/galeria' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Galeria</NavLink>
                        <NavLink exact to='/kontakt' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} className='nav__item' >Kontakt</NavLink>
                    </ul>
                </Router>
            </nav>
        </div>
    )
}

export default Nav;