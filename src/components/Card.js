import React from 'react';
import './Card.css'



const Card = (props) => {
    return (
        <div className='card'>
            <h1 className='card__title'>{props.title}</h1>
            <p className='card__info'>{props.info}</p>
            <a className='card__link' href=""><i className='card__icon'>{props.icon}</i></a>
            <button className='card__btn'>Dowiedz się więcej</button>
        </div>
    );
}

export default Card;
