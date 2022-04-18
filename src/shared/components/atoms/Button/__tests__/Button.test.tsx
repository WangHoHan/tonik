import React from 'react';
import {render, screen} from '@testing-library/react';
import Button from '../Button';

describe('Button', (): void => {
    it('should render Button component properly', (): void => {
        render(<Button text='Hello' isDisabled={false} onClick={() => {}}/>);
        const button: HTMLElement = screen.getByText(/hello/i);
        expect(button).toBeInTheDocument();
    });

    it('should render Button enabled', (): void => {
        render(<Button text='Hello' isDisabled={false} onClick={() => {}}/>);
        const button: HTMLElement = screen.getByText(/hello/i);
        expect(button).toBeEnabled();
    });

    it('should render Button disabled', (): void => {
        render(<Button text='Hello' isDisabled={true} onClick={() => {}}/>);
        const button: HTMLElement = screen.getByText(/hello/i);
        expect(button).toBeDisabled();
    });
});
