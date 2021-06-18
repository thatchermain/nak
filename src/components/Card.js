import React from 'react';
import './Card.css';




const Card = (props) => {

    return (
        <div className='card'>
            <span className='card__title'>{props.title}</span>
            <h4 className='card__info'>{props.info}</h4>
        </div>
    );
}

export default Card;
