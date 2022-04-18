import {fireEvent, render, screen} from '@testing-library/react';
import {Routes, Route} from 'react-router-dom';
import React from "react";
import {Provider} from 'react-redux';
import {store} from '../../../../store/store';
import {BrowserRouter} from 'react-router-dom';
import Navigation from "../../../root/Navigation/Navigation";
import HomePage from '../../../HomePage/HomePage';
import PageNotFound from '../PageNotFound';

const MockPageNotFound: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

describe('PageNotFound', (): void => {
    it('should render PageNotFound component properly', (): void => {
        render(<MockPageNotFound/>);
        const button: HTMLElement = screen.getByText(/back to home page/i);
        expect(button).toBeInTheDocument();
    });

    it('should render search bar disabled', (): void => {
        render(<MockPageNotFound/>);
        const searchBar: HTMLElement = screen.getByPlaceholderText(/search for github repositories/i);
        expect(searchBar).toBeDisabled();
    });

    it('should move to HomePage on Back to Home Page click', async (): Promise<any> => {
        render(<MockPageNotFound/>);
        const button: HTMLElement = screen.getByText(/back to home page/i);
        fireEvent.click(button);
        const sortingOptions: HTMLElement = await screen.findByText(/sorting options/i);
        expect(sortingOptions).toBeInTheDocument();
    });
});
