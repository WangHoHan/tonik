import React from 'react';
import {render, screen} from '@testing-library/react';
import BodyCell from '../BodyCell';

const MockBodyCell: React.FC = (): JSX.Element => {
    return (
        <table>
            <tbody>
                <tr>
                    <BodyCell text='Hello' width='100%'/>
                </tr>
            </tbody>
        </table>
    );
};

describe('BodyCell', (): void => {
    it('should render BodyCell component properly', (): void => {
        render(<MockBodyCell/>);
        const bodyCell: HTMLElement = screen.getByText(/hello/i);
        expect(bodyCell).toBeInTheDocument();
    });
});
