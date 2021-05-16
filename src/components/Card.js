import React from 'react';
import {Link} from 'react-router-dom'
import './Card.css'



const Card = (props) => {
    return (
        <div className='card'>
            <h1 className='card__title'>{props.title}</h1>
            <p className='card__info'>{props.info}</p>
            <Link to={props.target} style={{ textDecoration: 'none'}} className='card__btn'>Dowiedz się więcej</Link>
        </div>
    );
}

export default Card;
