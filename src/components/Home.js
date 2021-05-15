import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';

import ac from '../images/ac_white.png';
import repair from '../images/repair_white.png';
import check from '../images/check_white.png';

import './Home.css';
import Card from './Card'


const Home = () => {
    return (
        <div className='Home'>
            <div className="title">
                <h1 className='title__top'><span className='title__span'>Witamy</span></h1>
                <h2 className='title__bottom'>w zakładzie mechaniki pojazdowej <span className='title__span'>Jan Nosek</span>.<br/>Zapraszamy do zapoznania się z naszą ofertą.</h2>
            </div>
            <div className='main'>
                <Card 
                title='Stacja kontroli'
                info='Przeglądy okresowe i nie tylko. '
                icon={<img className='icon' src={check} width={100} alt="logo"/>}
                />
                <Card 
                title='Klimatyzacja'
                info='Uzupełnianie czynnika chłodzącego.'
                icon={<img className='icon' src={ac} width={100} alt="logo"/>}
                />
                <Card 
                title='Mechanika'
                info='Usługi mechaniczne w pełnym zakresie.'
                icon={<img className='icon' src={repair} width={100} alt="logo"/>}
                />
            </div>
        </div>
    );
}

export default Home;
