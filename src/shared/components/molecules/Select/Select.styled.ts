import styled from 'styled-components';

export const SelectStyled = styled.select`
  background-color: #DCD2FE;
  border: none;
  border-radius: 0.4rem;
  color: white;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  text-align-last: center;
  text-shadow: 1px 1px black;
  width: 150px;

  &:hover {
    background-color: plum;
    text-decoration: underline;
  }
  
  &:focus {
    outline: none;
  }
`;
