import React from 'react';
import mainColor from '../../data/StyledVariables';
import styled from 'styled-components';

const Heading = (props) => {
    return (
        <StyledH2>
            {props.title}
        </StyledH2>
    )
}

const StyledH2 = styled.h2`
    text-align: center;
    color: #eee;
    padding: 10rem 0 0 ;
    font-size: clamp(30px, 5vw, 100px);
    text-shadow: 2px 2px 15px ${mainColor};
    /* border-bottom: 2px solid ${mainColor}; */
`;

export default Heading;
