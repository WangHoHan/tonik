import {TRStyled} from './TableRow.styled';
import React from 'react';
import {TableRowType} from '../../../../constants/enums';
import BodyCell from '../../atoms/BodyCell/BodyCell';
import HeaderCell from '../../atoms/HeaderCell/HeaderCell';

interface TableRowParams {
    type: TableRowType,
    rowIndex: number | null,
    cells: string[]
}

const TableRow: React.FC<TableRowParams> = ({type, rowIndex, cells}: TableRowParams): JSX.Element => {

    const checkColor = (index: number | null): string => {
        if (index !== null) {
            if (index % 2 !== 0) {
                return '#F7F7F7';
            }
        }
        return 'white';
    };

    const calculateWidth = (cellsNumber: number): string => {
        if (cellsNumber > 0) {
            const width: string = 100 / cellsNumber + '%';
            return width;
        }
        return '100%';
    };

    return (
        <>
            {(type === TableRowType.HEADER) ?
                <TRStyled backgroundColor = 'yellow'>
                    {cells.map((cell: string, index: number) => {
                        return <HeaderCell key={index} text={cell}/>
                    })}
                </TRStyled> :
                <TRStyled backgroundColor = {checkColor(rowIndex)}>
                    {cells.map((cell: string, index: number) => {
                        return <BodyCell key={index} text={cell} width={calculateWidth(cells.length)}/>
                    })}
                </TRStyled>
            }
        </>
    );
};

export default TableRow;
