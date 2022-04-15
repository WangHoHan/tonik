import {TableNav} from './TableNavigation.styled';
import React from 'react';
import Button from '../../atoms/Button/Button';

interface TableNavigationProps {
    previousIsDisabled: boolean
    previousPage: Function,
    nextIsDisabled: boolean
    nextPage: Function
}

const TableNavigation: React.FC<TableNavigationProps> = ({previousIsDisabled, previousPage, nextIsDisabled, nextPage}: TableNavigationProps): JSX.Element => {
    return (
        <TableNav>
            <Button text='< Previous page' isDisabled={previousIsDisabled} onClick={previousPage}/>
            <Button text='Next page >' isDisabled={nextIsDisabled} onClick={nextPage}/>
        </TableNav>
    );
};

export default TableNavigation;