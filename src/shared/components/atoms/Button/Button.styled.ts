import styled from 'styled-components';
import {ButtonType} from '../../../../constants/enums';

interface ButtonStyledProps {
    buttonType: ButtonType.ENABLED | ButtonType.DISABLED
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${(props: ButtonStyledProps) => (props.buttonType === ButtonType.ENABLED) ? '#DCD2FE' : 'grey'};
  border: none;
  border-radius: 0.4rem;
  color: white;
  cursor: ${(props: ButtonStyledProps) => (props.buttonType === ButtonType.ENABLED) ? 'pointer' : 'unset'};
  font-size: 1rem;
  padding: 0.4rem 1rem;
  text-decoration: none;
  text-shadow: 1px 1px black;
  transition: 0.4s;
  width: 150px;
  
  &:hover {
    background-color: ${(props: ButtonStyledProps) => (props.buttonType === ButtonType.ENABLED) ? 'plum' : 'grey'};
    text-decoration: ${(props: ButtonStyledProps) => (props.buttonType === ButtonType.ENABLED) ? 'underline' : 'unset'};
  }
`;
