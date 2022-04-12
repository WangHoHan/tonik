import {render, screen} from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', (): void => {
    it('should render Footer component properly', (): void => {
        render(<Footer/>);
        const address: HTMLElement = screen.getByText(/gitHub repository search for Tonik by Tomasz Adamczyk/i);
        expect(address).toBeInTheDocument();
    });
});
