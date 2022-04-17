import {ButtonStyled} from './Button.styled';
import {ButtonType} from '../../../../constants/enums';
import React from 'react';

interface ButtonParams {
    text: string
    isDisabled: boolean
    onClick: Function
    width?: string
}

const Button: React.FC<ButtonParams> = ({text, isDisabled, onClick, width}: ButtonParams): JSX.Element => {
    return (
        <ButtonStyled  buttonType={isDisabled ? ButtonType.DISABLED : ButtonType.ENABLED} disabled={isDisabled} onClick={() => onClick()} width={width}>
            {text}
        </ButtonStyled>
    );
};

export default Button;