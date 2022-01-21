import React from 'react';
import airConditionServices from '../../data/airConditionServices'
import Heading from '../Heading/Heading';
import {AcUpContainer, AcUpsWrapper, StyledUl, StyledLi,AcIcon, StyledH5} from './AcElements'

const Ac = () => {
    return (
        <div>
            <AcUpContainer>
            <Heading  title={airConditionServices.title}/>
            <AcUpsWrapper>
                <StyledUl>
                    {airConditionServices.info.map((inf, index) => {
                        return (
                            <StyledLi key={index}>
                                <AcIcon />
                                <StyledH5>{inf}</StyledH5> 
                            </StyledLi>
                            )
                        }
                        )}
                </StyledUl>
            </AcUpsWrapper>
        </AcUpContainer>
        </div>
    )
}

export default Ac;
