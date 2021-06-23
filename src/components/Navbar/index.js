import React from 'react';
import { NavbarContainer, NavLogo, NavMobileIcon, NavMenu, NavItem, StyledLink } from './NavbarElements';
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar'

const Navbar = ({toggle}) => {



    return (
        <>
            <NavbarContainer>
                <NavLogo>
                    <StyledLink exact to='/home'>J N</StyledLink>
                </NavLogo>
                <NavMobileIcon onClick={toggle}>
                    {FaBars}
                </NavMobileIcon>
                <Sidebar/>
                <NavMenu>
                    <NavItem>
                        <StyledLink exact to='/checkup' activeClassName='any'>Stacja kontroli</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink exact to='/ac' activeClassName='selected'>Klimatyzacja</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink exact to='/mech' activeClassName='selected'>Mechanika</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink exact to='/gallery' activeClassName='selected'>Galeria</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink exact to='/contact' activeClassName='selected'>Kontakt</StyledLink>
                    </NavItem>
                </NavMenu>

            </NavbarContainer>
        </>
    )
}

export default Navbar;




{/* <ul className='nav__list'>
                    {navlinks.map((link, idx) =>
                        <StyledLink
                            key={idx}
                            exact to={link.path}
                            activeClassName={link.activeClassName}
                            style={style} >
                            {link.title}
                        </StyledLink>)}
                </ul> */}