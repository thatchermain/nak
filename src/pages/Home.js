import React from 'react';
import ac from '../images/ac_white.png';
import repair from '../images/repair_white.png';
import check from '../images/check_white.png';
import wrench from '../images/wrench.png';
import './Home.css';
import Card from '../components/Card';


const Home = () => {
    return (
        <div className='Home'>
            <div className="main">
                <div className="title">
                    <h1 className='title__top'>Jan <span className='title__span'>NOSEK</span></h1>
                    <div className="title__services">
                        <h3 className='title__service'><img className='title__icon' src={wrench} alt="" />Stacja kontroli pojazdów</h3>
                        <h3 className='title__service'><img className='title__icon' src={wrench} alt="" />Klimatyzacja</h3>
                        <h3 className='title__service'><img className='title__icon' src={wrench} alt="" />Mechanika pojazdowa</h3>
                    </div>

                    {/* <h2 className='title__bottom'>Zapraszamy do zapoznania się z naszą ofertą.</h2> */}
                </div>
                <div className="info">
                    <div className="info__phone">
                        <h2>Masz pytanie? Zadzwoń!</h2>
                        <h2><span className='info__span'>123-465-789</span></h2>
                    </div>
                    <br />
                    <div className="info__address">
                        <h2>Znajdziesz nas tu :</h2>
                        <h2><span className='info__span'>Wola Rzędzińska 70B</span></h2>
                        <h3><span className='info__span'>33-100 Tarnów</span></h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
