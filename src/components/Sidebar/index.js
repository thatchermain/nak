import React from 'react';
import { SidebarContainer, SidebarMenu, NavItem, StyledLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarMenu>
                <NavItem>
                    <StyledLink exact to='/diagnosis'
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
