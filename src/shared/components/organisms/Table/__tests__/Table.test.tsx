import React from 'react';
import {render, screen} from '@testing-library/react';
import Table from '../Table';

describe('TableRow', (): void => {
    it('should render Table component properly', (): void => {
        render(<Table headers={['hello']} bodies={[['world']]}/>);
        const cell: HTMLElement = screen.getByText(/hello/i);
        expect(cell).toBeInTheDocument();
    });
});
