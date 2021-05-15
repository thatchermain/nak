import React from 'react';
import logo from '../images/Logo.png';
import './Nav.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className='nav'>
                {/* <div className='nav__logo'><img src={logo} width={150} alt="logo"/></div> */}
                <Router>
                        {/* <NavLink exact to='/' activeClassName="selectedLink"  className="nav__logo" style={{ textDecoration: 'none', color: '#ddd' }}>Home</NavLink> */}
                    <ul className='nav__list'>
                        <NavLink exact to='/' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} >Strona główna</NavLink>
                        <NavLink to='/stacja' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }} >Stacja Kontroli</NavLink>
                        <NavLink to='/klima' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%' }}>Klimatyzacja</NavLink>
                        <NavLink to='/mechanika' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }}>Mechanika</NavLink>
                        <NavLink to='/galeria' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }}>Galeria</NavLink>
                        <NavLink to='/kontakt' 
                        activeClassName="selectedLink" 
                        style={{ textDecoration: 'none', color: '#ddd', padding: '1%'  }}>Kontakt</NavLink>
                    </ul>
                </Router>
            </nav>
        </div>
    )
}

export default Nav;