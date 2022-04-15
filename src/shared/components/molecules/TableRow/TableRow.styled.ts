import styled from 'styled-components';

interface TRStyledProps {
    backgroundColor: string
}

export const TRStyled = styled.tr<TRStyledProps>`
  background-color: ${(props: TRStyledProps) => props.backgroundColor};
  height: 50px;
`;
