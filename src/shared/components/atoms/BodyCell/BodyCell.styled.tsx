import styled from 'styled-components';

interface TDStyledProps {
    width: string
}

export const TDStyled = styled.td`
  padding:  0 1rem;
  width: ${(props: TDStyledProps) => props.width};
`;
