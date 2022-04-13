import {THStyled} from './HeaderCell.styled';
import React from 'react';

interface HeaderCellParams {
    text: string
}

const HeaderCell: React.FC<HeaderCellParams> = ({text}: HeaderCellParams): JSX.Element => {
    return (
        <THStyled>
            {text}
        </THStyled>
    );
}

export default HeaderCell;
