import React from 'react';
import Navigation from './Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import Footer from './Footer/Footer';

const Root: React.FC = (): JSX.Element => {
    return (
        <>
            <Navigation/>
            <HomePage/>
            <Footer/>
        </>
    );
};

export default Root;
