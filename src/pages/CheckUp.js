import React from 'react';
// import Card from '../components/Card';
import clipboard from '../images/clipboard.png';
import './CheckUp.css';
import checkups from '../data/checkUps';


export default function CheckUp() {


    return (
        <div className='checkUp'>
        
                {checkups.map(checkup => {
                    return (
                        <div className="services">
                            <h1 className='services__name' >{checkup.title}</h1>
                            <ul className='services__list'>
                                {checkup.info.map(inf => {
                                    return (
                                        <li className='services__item'><i class="fas fa-angle-right"></i>{inf}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )

                })}
            {/* </div> */}


        </div>
    )
}
