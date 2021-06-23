import React from 'react';
import { SidebarContainer, SidebarMenu, SidebarIcon, NavItem, StyledLink } from './SidebarElements';
import { FaBars } from "react-icons/fa";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            {/* <SidebarIcon onClick={toggle}>
                {FaBars}
            </SidebarIcon> */}
            <SidebarMenu>
                <NavItem>
                    <StyledLink exact to='/checkup'
                        activeClassName='any'>
                        Stacja kontroli
                    </StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink exact to='/ac'
                        activeClassName='selected'>
                        Klimatyzacja
                    </StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink exact to='/mech'
                        activeClassName='selected'>
                        Mechanika
                    </StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink exact to='/gallery'
                        activeClassName='selected'>
                        Galeria
                    </StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink exact to='/contact'
                        activeClassName='selected'>
                        Kontakt
                    </StyledLink>
                </NavItem>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar;
