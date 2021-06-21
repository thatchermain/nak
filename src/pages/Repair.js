import React from 'react';
import './Repair.css';
import repairServices from '../data/repairServices'

const Repair = () => {
    return (
        <div className='repair'>
            <h1 className='repair__title'>Wykonujemy następujące usługi:</h1>
            <ul className='repair__list'>
                {repairServices.map(item => {
                    return(
                        <li className='repair__item'>🔧 {item}</li>
                    )
                    
                })}
            </ul>
        </div>
    )
}

export default Repair;