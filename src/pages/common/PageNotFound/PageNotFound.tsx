import {PageNotFoundWrapper, PictureWrapper, ImageStyled, BackToHomePageWrapper, BackToHomePage} from './PageNotFound.styled';
import React from 'react';
import PageNotFoundImage from '../../../assets/images/pagenotfound.webp'

const PageNotFound: React.FC = (): JSX.Element => {
    return (
      <PageNotFoundWrapper>
          <PictureWrapper>
              <picture>
                  <source srcSet={PageNotFoundImage}/>
                  <ImageStyled srcSet={PageNotFoundImage} alt='Page Not Found'/>
              </picture>
          </PictureWrapper>
          <BackToHomePageWrapper>
              <BackToHomePage role='button' to='/home'>
                  Back to Home Page
              </BackToHomePage>
          </BackToHomePageWrapper>
      </PageNotFoundWrapper>
    );
};

export default PageNotFound;
