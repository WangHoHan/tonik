import {PageNotFoundWrapper, PictureWrapper, ImageStyled, BackToHomePageWrapper, BackToHomePage} from './PageNotFound.styled';
import React, {useEffect} from 'react';
import PageNotFoundImage from '../../../assets/images/pagenotfound.webp'

const PageNotFound: React.FC = (): JSX.Element => {
    useEffect((): void => {
        const searchBar: any = document.getElementById('search-bar');
        searchBar.disabled = true;
    }, []);

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
