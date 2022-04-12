import {render, screen} from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', (): void => {
    it('should render Footer component properly', (): void => {
        render(<Footer/>);
        const address: HTMLElement = screen.getByText(/github repository search for tonik by tomasz adamczyk/i);
        expect(address).toBeInTheDocument();
    });
});
