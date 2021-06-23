import styled from 'styled-components';
import hero1 from '../../images/altbg/hero2.jpg'

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image:
    linear-gradient(to right, rgba(0,0,0, 1) 50%, rgba(0,0,0, 0) 60%),
    url(${hero1});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    `;

export const Heading = styled.h1`
    padding: 10rem 0 5rem;
    font-size: clamp(20px, 20vw, 200px);
    font-weight: bold;
    color: #fff;
    text-shadow:10px 10px 20px #aa2527;
`;

export const HeroInfo = styled.div`
    
    width: 50%;
    height: 50%;
    padding: 2rem;
`;

export const HeroH2 = styled.h2`
    padding: 2rem 0;
    color: #fff;
    font-size: clamp(20px, 3vw, 40px);
    font-weight: normal;
    border-bottom: 2px solid #aa2527;
    text-align: left;;
`;