import React from 'react';
import {HeroContainer, Heading, HeroInfo,HeroH2} from './HeroElements';


const Hero = () => {
    return (
        <HeroContainer>
            <Heading>
                NOSEK
            </Heading>
            <HeroInfo>
                <HeroH2>Stacja Kontroli Pojazdów</HeroH2>
                <HeroH2>Klimatyzacja</HeroH2>
                <HeroH2>Mechanika</HeroH2>
            </HeroInfo>
        </HeroContainer>
    )
}
export default Hero;
