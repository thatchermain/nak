import React from 'react';
import repairServices from '../../data/repairServices'
import Heading from '../Heading/Heading';
import {MechUpContainer, MechUpsWrapper, StyledUl, StyledLi,MechIcon, StyledH5} from './MechElements'

const Mech = () => {
    return (
        <div>
            <MechUpContainer>
            <Heading  title={repairServices.title}/>
            <MechUpsWrapper>
                <StyledUl>
                    {repairServices.info.map((inf, index) => {
                        return (
                            <StyledLi key={index}>
                                <MechIcon />
                                <StyledH5>{inf}</StyledH5> 
                            </StyledLi>
                            )
                        }
                        )}
                </StyledUl>
            </MechUpsWrapper>
        </MechUpContainer>
        </div>
    )
}

export default Mech;
