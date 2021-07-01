import styled from 'styled-components';
import mainColor from '../../data/StyledVariables';
import { NavLink} from 'react-router-dom';
import { FaBars } from "react-icons/fa";

export const NavbarContainer = styled.div`
    /* position: absolute; */
    position: fixed;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image:linear-gradient(0deg, rgba(0,0,0, .9) 10%, rgba(0,0,0, 1) 50%);
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
    transition: all .3s ease-out;
    border: 1px solid black;
    border-radius: 10px;

    &.${props => props.activeClassName} {
        transition: all .4s ease-out;
        border: 1px solid ${mainColor};
        border-radius: 10px;
  }
`;
