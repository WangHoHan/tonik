import {TableStyled} from './Table.styled';
import React from 'react';
import TableRow from '../../molecules/TableRow/TableRow';
import {TableRowType} from '../../../../constants/enums';

interface TableProps {
    headers: string[],
    bodies: string[][]
}

const Table: React.FC<TableProps> = ({headers, bodies}: TableProps): JSX.Element => {
    return (
        <TableStyled>
            <thead>
                <TableRow type={TableRowType.HEADER} rowIndex={null} cells={headers}/>
            </thead>
            <tbody>
                {bodies.map((elements: string[], index: number) => <TableRow key={index} type={TableRowType.BODY} rowIndex={index} cells={elements}/>)}
            </tbody>
        </TableStyled>
    );
};

export default Table;