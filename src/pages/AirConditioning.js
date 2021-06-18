import React from 'react';
import airConditionServices from '../data/airConditionServices'
import './AirConditioning.css'


export default function AirConditioning() {
    return (
        <div className='airCond'>
            <h1 className='airCond__title'>Wykonujemy następujące usługi:</h1>
            <ul className='airCond__list'>
                {airConditionServices.map(item => {
                    return(
                        <li className='airCond__item'><i class="fas fa-angle-right"></i>{item}</li>
                    )
                    
                })}
            </ul>
        </div>
    )
}
