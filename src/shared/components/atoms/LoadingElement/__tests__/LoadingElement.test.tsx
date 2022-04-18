import React from 'react';
import {render, screen} from '@testing-library/react';
import LoadingElement from '../LoadingElement';

describe('LoadingElement', (): void => {
    it('should render LoadingElement component properly', (): void => {
        render(<LoadingElement/>);
        const loadingElement: HTMLElement = screen.getByText(/loading/i);
        expect(loadingElement).toBeInTheDocument();
    });
});
