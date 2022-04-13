import {TDStyled} from './BodyCell.styled';
import React from 'react';

interface BodyCellParams {
    text: string
    width: string
}

const BodyCell: React.FC<BodyCellParams> = ({text, width}: BodyCellParams): JSX.Element => {
    return (
        <TDStyled width={width}>
            {text}
        </TDStyled>
    );
}

export default BodyCell;
