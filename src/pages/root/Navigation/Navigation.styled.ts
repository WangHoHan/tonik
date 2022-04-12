import styled from 'styled-components';

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: yellow;
  top: 0;
  display: flex;
  height: 4rem;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const NavStyled = styled.nav`
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
  };
`;
