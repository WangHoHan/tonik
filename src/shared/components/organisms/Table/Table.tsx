import {TableStyled} from './Table.styled';
import React from 'react';
import TableRow from '../../molecules/TableRow/TableRow';
import {TableRowType} from '../../../../constants/enums';
import TableNavigation from '../../molecules/TableNavigation/TableNavigation';

interface TableProps {
    headers: string[],
    bodies: string[][],
    currentPage: number,
    perPage: number,
    previousPage: Function,
    nextPage: Function
}

const Table: React.FC<TableProps> = ({headers, bodies, currentPage, perPage, previousPage, nextPage}: TableProps): JSX.Element => {
    return (
        <>
            <TableStyled>
                <thead>
                <TableRow type={TableRowType.HEADER} rowIndex={null} cells={headers}/>
                </thead>
                <tbody>
                {bodies.map((elements: string[], index: number) => <TableRow key={index} type={TableRowType.BODY}
                                                                             rowIndex={index} cells={elements}/>)}
                </tbody>
            </TableStyled>
            <TableNavigation previousIsDisabled={(currentPage === 1)} previousPage={previousPage} nextIsDisabled={!(bodies.length === 30)} nextPage={nextPage}/>
        </>
    );
};

export default Table;