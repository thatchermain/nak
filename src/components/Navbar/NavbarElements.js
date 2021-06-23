import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import { FaBars } from "react-icons/fa";

export const NavbarContainer = styled.div`
    position: absolute;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    @media screen and (max-width: 768px) {
        width: 100%;
        
    }
`;

export const NavLogo = styled.i`
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
    padding: 0 0 0 2rem;
    transition: all .4s ease-in-out;
    z-index: 999;
    &:hover {
        transition: all .4s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        padding: 0 0 0 2rem;
        
    }
`;

export const NavMobileIcon = styled(FaBars)`
    display: none;
        
    @media screen and (max-width: 768px){
        display: block;
        color: #eee;
        font-size: 36px;
        cursor: pointer;
        margin-right: 2rem;
        z-index: 999;
    }
`;

export const NavMenu = styled.ul`
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    

    @media screen and (max-width: 768px){
        display: none;
    }

`;

export const NavItem = styled.li`
    cursor: pointer; 
    font-size: 20px;
`;

export const StyledLink = styled(NavLink)`
    color: #eee;
    padding: 1rem 1rem;
    text-decoration: none;
    white-space: nowrap;
    transition: all .4s ease-out;

    &.${props => props.activeClassName} {
        color: #aa2527;
        transition: all .4s ease-out;
  }
`;
