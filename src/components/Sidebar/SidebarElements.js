import styled from 'styled-components';
import mainColor from '../../data/StyledVariables';
import { NavLink} from 'react-router-dom';


export const SidebarContainer = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        text-align: center;
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
        opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
        background-color: black;
        }
`;

export const SidebarMenu = styled.ul`
    width: 100%;
    height: 60vh;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
   
`;

export const SidebarIcon = styled.div`
    
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    cursor: pointer;
    display: grid;

    
`;

export const NavItem = styled.li`
    cursor: pointer; 
    font-size: 40px;
    display: grid;
    align-items: center;
    height: 100%;
    transition: all .2s ease-out;
    &:hover{
        background-color: ${mainColor};
        transition: all .3s ease-out;
    }
`;

export const StyledLink = styled(NavLink)`
    color: #eee;
    padding: 1rem 1rem;
    text-decoration: none;
    white-space: nowrap;
    transition: all .4s ease-out;
    opacity: 1;

    &.${props => props.activeClassName} {
        color: ${mainColor};
        transition: all .4s ease-out;
  }
`;
