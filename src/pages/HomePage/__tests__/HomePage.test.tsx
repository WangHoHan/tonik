import {render, screen} from '@testing-library/react';
import {Routes, Route, Navigate} from 'react-router-dom';
import React from "react";
import {Provider} from 'react-redux';
import {store} from '../../../store/store';
import {BrowserRouter} from 'react-router-dom';
import Navigation from "../../root/Navigation/Navigation";
import HomePage from '../../HomePage/HomePage';

const MockHomePage: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/' element={<Navigate to='/home' replace/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

describe('HomePage', (): void => {
    it('should render HomePage component properly', async (): Promise<any> => {
        render(<MockHomePage/>);
        const sortingOptions: HTMLElement = await screen.findByText(/sorting options/i);
        expect(sortingOptions).toBeInTheDocument();
    });
});
