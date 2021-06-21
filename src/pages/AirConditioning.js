import React from 'react';
import airConditionServices from '../data/airConditionServices'
import './AirConditioning.css'


const AirConditioning = () => {
    return (
        <div className='airCond'>
            <h1 className='airCond__title'>Wykonujemy następujące usługi:</h1>
            <ul className='airCond__list'>
                {airConditionServices.map(item => {
                    return(
                        <li className='airCond__item'>❄️ {item}</li>
                    )
                    
                })}
            </ul>
        </div>
    )
}


export default AirConditioning;