import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Select from '../Select';

describe('Select', (): void => {
    it('should render TableRow component properly', (): void => {
        render(<Select selectId='id' options={['hello']} onChange={() => {}}/>);
        const option: HTMLElement = screen.getByText(/hello/i);
        expect(option).toBeInTheDocument();
    });

    it('should be able to change options properly', (): void => {
        render(<Select selectId='id' options={['hello', 'tonik']} onChange={() => {}}/>);
        const select: HTMLElement = screen.getByText(/hello/i);
        fireEvent.click(select);
        const tonikOption: HTMLElement = screen.getByText(/hello/i);
        fireEvent.click(tonikOption);
        const selectedOption: HTMLElement = screen.getByText(/tonik/i);
        expect(selectedOption).toBeInTheDocument();
    });
});
