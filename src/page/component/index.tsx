import React from 'react';
import { useLocation } from 'react-router-dom';

const MircoApp = ()=>{
    const location = useLocation();
    const thridKey = location.pathname.split('/')[2];
    return <div id={`${thridKey}-container`} className='mircoApp'>

    </div>
}

export default MircoApp