import styled from 'styled-components';
import mainColor from '../../data/StyledVariables';
import hero2 from '../../images/altbg/hero2.jpg';

//original main color : ${mainColor};



export const HeroContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-image:
    linear-gradient(to right, rgba(0,0,0, 1) 50%, rgba(0,0,0, 0) 60%),
    url(${hero2});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    `;

export const Heading = styled.h1`
    padding: 10rem 0 0;
    font-size: clamp(70px, 15vw, 120px);
    font-weight: bold;
    color: #fff;
    text-shadow:10px 10px 20px ${mainColor};
    margin: 3rem;
    align-self: center;
    margin: 0 auto;
`;

export const HeroInfo = styled.div`
    
    /* width: 50%; */
    height: auto;
    padding: 2rem;
    align-self: center;
    grid-column: 1/2;
`;

export const HeroH2 = styled.h2`
    padding: 2rem 0;
    color: #fff;
    font-size: clamp(20px, 3vw, 40px);
    font-weight: normal;
    border-bottom: 2px solid ${mainColor};
    /* border-bottom: 2px solid ${mainColor}; */

    text-align: left;
`;