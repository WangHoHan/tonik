import React from 'react';
import {render, screen} from '@testing-library/react';
import TableRow from '../TableRow';
import {TableRowType} from '../../../../../constants/enums';

const MockBodyRow: React.FC = (): JSX.Element => {
    return (
        <table>
            <tbody>
                <TableRow type={TableRowType.BODY} rowIndex={0} cells={['hello']}/>
            </tbody>
        </table>
    );
};

describe('TableRow', (): void => {
    it('should render TableRow component properly', (): void => {
        render(<MockBodyRow/>);
        const cell: HTMLElement = screen.getByText(/hello/i);
        expect(cell).toBeInTheDocument();
    });
});
