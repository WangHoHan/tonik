import styled from 'styled-components';

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: yellow;
  display: flex;
  height: 4rem;
  justify-content: center;
  width: 100%;
`;

export const NavStyled = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const SearchBar = styled.input`
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.8rem;
  text-align: center;
  width: 100%;

  &:focus {
    outline: none !important;
  }
;
`;
