import {HeaderStyled, NavStyled, SearchBar} from './Navigation.styled';
import React from 'react';

const Navigation: React.FC = (): JSX.Element => {
    return (
        <HeaderStyled>
            <NavStyled>
                <SearchBar placeholder='Search for GitHub repositories'
                           onFocus={(e: any) => e.target.placeholder = ''}
                           onBlur={(e: any) => e.target.placeholder = 'Search for GitHub repositories'}/>
            </NavStyled>
        </HeaderStyled>
    );
};

export default Navigation;
