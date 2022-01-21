import React from 'react';
import checkUps from '../../data/checkUps';
import {CheckUpContainer, CheckUpsWrapper, StyledUl, StyledLi,CheckIcon, StyledH5} from './CheckUpElements';
import Heading from '../Heading/Heading';

const CheckUp = () => {
    return (
        <CheckUpContainer>
            <Heading  title={checkUps.title}/>
            <CheckUpsWrapper>
                <StyledUl>
                    {checkUps.info.map((inf, index) => {
                        return (
                            <StyledLi key={index}>
                                <CheckIcon />
                                <StyledH5>{inf}</StyledH5> 
                            </StyledLi>
                            )
                        }
                        )}
                </StyledUl>
            </CheckUpsWrapper>
        </CheckUpContainer>
    )
}

export default CheckUp;
