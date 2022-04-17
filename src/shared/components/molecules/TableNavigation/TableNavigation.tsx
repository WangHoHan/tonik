import {TableNav, PageNav, PageNumber, PerPage} from './TableNavigation.styled';
import React from 'react';
import Button from '../../atoms/Button/Button';

interface TableNavigationProps {
    isPreviousDisabled: boolean
    previousPage: Function,
    isNextDisabled: boolean
    nextPage: Function,
    isChangePerPageDisabled: Function,
    pageNumber: number
    changePerPage: Function
}

const TableNavigation: React.FC<TableNavigationProps> = ({isPreviousDisabled, previousPage, isNextDisabled, nextPage, isChangePerPageDisabled, pageNumber, changePerPage}: TableNavigationProps): JSX.Element => {
    return (
        <TableNav>
            <PageNav>
                <Button text='< Previous page' isDisabled={isPreviousDisabled} onClick={previousPage} width='150px'/>
                <Button text='Next page >' isDisabled={isNextDisabled} onClick={nextPage} width='150px'/>
            </PageNav>
            <PageNumber>
                {pageNumber}
            </PageNumber>
            <PerPage>
                <span>Per page</span>
                <Button text='5' isDisabled={isChangePerPageDisabled(5)} onClick={() => changePerPage(5)} width='50px'/>
                <Button text='10' isDisabled={isChangePerPageDisabled(10)} onClick={() => changePerPage(10)} width='50px'/>
                <Button text='20' isDisabled={isChangePerPageDisabled(20)} onClick={() => changePerPage(20)} width='50px'/>
            </PerPage>
        </TableNav>
    );
};

export default TableNavigation;