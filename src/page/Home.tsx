import React from 'react';
import { useTranslate, Span } from 'useTranslate'; 
import './home.less';

const Home = () => {
    return <div className="home">
        <div className='content'></div>
        <div className="home-bottom">
            <div className='button'>
                <div className="glow"></div>
                <Span>{useTranslate('启程')}</Span>
            </div>
        </div>
    </div>
}

export default Home