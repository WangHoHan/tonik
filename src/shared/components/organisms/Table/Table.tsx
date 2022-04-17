import {TableSortingOptions, SortingOptions, TableStyled} from './Table.styled';
import React from 'react';
import {TableRowType} from '../../../../constants/enums';
import Select from '../../molecules/Select/Select';
import TableRow from '../../molecules/TableRow/TableRow';
import TableNavigation from '../../molecules/TableNavigation/TableNavigation';

interface TableProps {
    headers: string[],
    bodies: string[][],
    sortId: string,
    sorts: string[],
    orderId: string,
    orders: string[],
    onSortChange: Function,
    onOrderChange: Function,
    isPreviousDisabled: boolean
    previousPage: Function,
    isNextDisabled: boolean,
    nextPage: Function,
    isChangePerPageDisabled: Function,
    pageNumber: number,
    changePerPage: Function
}

const Table: React.FC<TableProps> = ({headers, bodies, sortId, sorts, orderId, orders, onSortChange, onOrderChange, isPreviousDisabled, previousPage, isNextDisabled, nextPage, isChangePerPageDisabled, pageNumber, changePerPage}: TableProps): JSX.Element => {
    return (
        <>
            <TableSortingOptions>
                <div>Sorting options</div>
                <SortingOptions>
                    <Select selectId={sortId} options={sorts} onChange={onSortChange}/>
                    <Select selectId={orderId} options={orders} onChange={onOrderChange}/>
                </SortingOptions>
            </TableSortingOptions>
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