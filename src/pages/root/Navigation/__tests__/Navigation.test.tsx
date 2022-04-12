import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../../../../store/store';
import Navigation from '../Navigation';

const MockNavigation: React.FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
};

describe('Navigation', (): void => {
    it('should render Navigation component properly', (): void => {
        render(<MockNavigation/>);
        const searchBarInput: HTMLElement = screen.getByPlaceholderText(/search for gitHub repositories/i);
        expect(searchBarInput).toBeInTheDocument();
    });

    it('should hide placeholder text when search bar focused', (): void => {
        render(<MockNavigation/>);
        const searchBarInput: HTMLElement = screen.getByPlaceholderText(/search for github repositories/i);
        fireEvent.focusIn(searchBarInput);
        expect(searchBarInput).toHaveAttribute('placeholder', '');
    });

    it('should should show placeholder text when search bar is focused and then unfocused', (): void => {
        render(<MockNavigation/>);
        const searchBarInput: HTMLElement = screen.getByPlaceholderText(/search for gitHub repositories/i);
        fireEvent.focusIn(searchBarInput);
        fireEvent.focusOut(searchBarInput);
        expect(searchBarInput).toHaveAttribute('placeholder', 'Search for GitHub repositories');
    });

    it('should be able to type in input', (): void => {
        render(<MockNavigation/>);
        const searchBarInput: HTMLElement = screen.getByPlaceholderText(/search for gitHub repositories/i);
        fireEvent.input(searchBarInput, {target: {value: 'Tonik'}});
        expect(searchBarInput).toHaveDisplayValue('Tonik');
    });
});
