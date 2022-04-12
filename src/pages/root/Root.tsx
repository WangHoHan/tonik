import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import Navigation from './Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import Footer from './Footer/Footer';

const Root: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Navigation/>
            <HomePage/>
            <Footer/>
        </Provider>
    );
};

export default Root;
