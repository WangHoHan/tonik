import React from 'react';
import {render, screen} from '@testing-library/react';
import Option from '../Option';

describe('Option', (): void => {
    it('should render Option component properly', (): void => {
        render(<Option text='Hello'/>);
        const option: HTMLElement = screen.getByText(/hello/i);
        expect(option).toBeInTheDocument();
    });
});
