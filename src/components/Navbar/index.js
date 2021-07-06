import React from 'react';
import { NavbarContainer, NavLogo, NavMobileIcon, NavMenu, NavItem, StyledLink,StyledLogo } from './NavbarElements';
import { FaBars } from "react-icons/fa";
import logo from '../../images/JN-logo2.png'
import Sidebar from '../Sidebar';

const Navbar = ({toggle}) => {



    return (
        <>
            <NavbarContainer>
                {/* <NavLogo> */}
                    <StyledLink exact to='/home'><StyledLogo src={logo}/></StyledLink>
                {/* </NavLogo> */}
                <NavMobileIcon onClick={toggle}>
                    {FaBars}
                </NavMobileIcon>
                <Sidebar/>
                <NavMenu>
                    <NavItem>
                        <StyledLink exact to='/diagnosis' activeClassName='any'>Stacja kontroli</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink exact to='/airCondition' activeClassName='selected'>Klimatyzacja</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink exact to='/repair' activeClassName='selected'>Mechanika</StyledLink>
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