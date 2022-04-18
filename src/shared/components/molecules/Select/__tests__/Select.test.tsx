import React from 'react';
import {render, screen} from '@testing-library/react';
import Select from '../Select';

describe('Select', (): void => {
    it('should render TableRow component properly', (): void => {
        render(<Select selectId='id' options={['hello']} onChange={() => {}}/>);
        const option: HTMLElement = screen.getByText(/hello/i);
        expect(option).toBeInTheDocument();
    });
});
