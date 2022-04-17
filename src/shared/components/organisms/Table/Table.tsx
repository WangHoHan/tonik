import {TableStyled} from './Table.styled';
import React from 'react';
import TableRow from '../../molecules/TableRow/TableRow';
import {TableRowType} from '../../../../constants/enums';
import TableNavigation from '../../molecules/TableNavigation/TableNavigation';

interface TableProps {
    headers: string[],
    bodies: string[][],
    isPreviousDisabled: boolean
    previousPage: Function,
    isNextDisabled: boolean,
    nextPage: Function,
    isChangePerPageDisabled: Function,
    pageNumber: number,
    changePerPage: Function
}

const Table: React.FC<TableProps> = ({headers, bodies, isPreviousDisabled, previousPage, isNextDisabled, nextPage, isChangePerPageDisabled, pageNumber, changePerPage}: TableProps): JSX.Element => {
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
            <TableNavigation isPreviousDisabled={isPreviousDisabled} previousPage={previousPage} isNextDisabled={isNextDisabled} nextPage={nextPage} isChangePerPageDisabled={isChangePerPageDisabled} pageNumber={pageNumber} changePerPage={changePerPage}/>
        </>
    );
};

export default Table;