import styled from 'styled-components';
import diag1 from '../../images/altbg/diag1.jpg';
import mainColor from '../../data/StyledVariables';
import {FaCheck} from 'react-icons/fa';


export const CheckUpContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    background-image:
    linear-gradient(205deg, rgba(0,0,0, .8) 50vw, rgba(0,0,0, .7) 70%),
    url(${diag1});
    background-size: cover;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* overflow: hidden; */
`;

export const CheckUpsWrapper = styled.div `
    width: 100%;
    height: 100%;
    padding: 5rem 0;
`;

export const StyledUl = styled.ul `
    margin: 0 auto;
    list-style: none;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: clamp(0.1rem,0.1vw,1rem) ;
    grid-template-columns: repeat(auto-fit, minmax(auto, 400px));
    grid-template-rows: max-content;
`;

export const StyledLi = styled.li `
    display: flex;
    margin: 2rem 0;
    color: #eee;
    text-transform: capitalize;
    align-items: center;
    font-size: 20px;
`;

export const CheckIcon = styled(FaCheck)`
    color: ${mainColor};
    font-size: 30px;
    margin-right: 1rem;
`;

export const StyledH5 = styled.span`

`;