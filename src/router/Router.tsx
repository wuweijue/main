import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../page/Home';

const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    </BrowserRouter>
}

export default AppRouter