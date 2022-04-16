import {TableNav} from './TableNavigation.styled';
import React from 'react';
import Button from '../../atoms/Button/Button';

interface TableNavigationProps {
    isPreviousDisabled: boolean
    previousPage: Function,
    isNextDisabled: boolean
    nextPage: Function
}

const TableNavigation: React.FC<TableNavigationProps> = ({isPreviousDisabled, previousPage, isNextDisabled, nextPage}: TableNavigationProps): JSX.Element => {
    return (
        <TableNav>
            <Button text='< Previous page' isDisabled={isPreviousDisabled} onClick={previousPage}/>
            <Button text='Next page >' isDisabled={isNextDisabled} onClick={nextPage}/>
        </TableNav>
    );
};

export default TableNavigation;