import styled, {css} from 'styled-components';

interface TRStyledProps {
    backgroundColor: string
}

export const TRStyled = styled.tr<TRStyledProps>`
  ${(props: any) => props.backgroundColor && css`
    background-color: ${(props: TRStyledProps) => props.backgroundColor};
  `};
`;
