import React from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import Footer from './Footer/Footer';

const Root: React.FC = (): JSX.Element => {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/' element={<Navigate to='/home' replace/>}/>
                <Route path='*' element={<Navigate to='/home' replace/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default Root;
