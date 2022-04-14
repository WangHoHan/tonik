import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PageNotFoundWrapper = styled.main`
  padding: 0 2rem 5rem;
`;

export const PictureWrapper = styled.picture`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
`;

export const BackToHomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const BackToHomePage = styled(Link)`
  background-color: #DCD2FE;
  border-radius: 0.4rem;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  padding: 0.4rem 1rem;
  text-decoration: none;
  text-shadow: 1px 1px black;
  transition: 0.4s;
  width: fit-content;

  &:hover {
    background-color: plum;
    text-decoration: underline;
  }
`;
