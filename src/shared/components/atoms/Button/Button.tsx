import {ButtonStyled} from './Button.styled';
import {ButtonType} from '../../../../constants/enums';
import React from 'react';

interface ButtonParams {
    text: string
    isDisabled: boolean
    onClick: Function
}

const Button: React.FC<ButtonParams> = ({text, isDisabled, onClick}: ButtonParams): JSX.Element => {
    return (
        <ButtonStyled  buttonType={isDisabled ? ButtonType.DISABLED : ButtonType.ENABLED} disabled={isDisabled} onClick={() => onClick()}>
            {text}
        </ButtonStyled>
    );
};

export default Button;