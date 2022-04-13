import React from 'react';
import {render, screen} from '@testing-library/react';
import HeaderCell from '../HeaderCell';

const MockHeaderCell: React.FC = (): JSX.Element => {
    return (
        <table>
            <thead>
                <tr>
                    <HeaderCell text='Hello'/>
                </tr>
            </thead>
        </table>
    );
};

describe('HeaderCell', (): void => {
    it('should render HeaderCell component properly', (): void => {
        render(<MockHeaderCell/>);
        const headerCell: HTMLElement = screen.getByText(/hello/i);
        expect(headerCell).toBeInTheDocument();
    });
});
