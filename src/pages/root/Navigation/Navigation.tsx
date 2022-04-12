import {HeaderStyled, NavStyled, SearchBar} from './Navigation.styled';
import React, {Dispatch} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectSearchBar} from '../../../store/data/searchbar/selectors';
import {setSearchBarInput} from "../../../store/data/searchbar/actions";

const Navigation: React.FC = (): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();
    const searchBar: any = useSelector(selectSearchBar);

    const handleSearchBarOnInput = (e: any): void => {
        dispatch(setSearchBarInput(e.target.value));
    };

    return (
        <HeaderStyled>
            <NavStyled>
                <SearchBar type='text'
                           placeholder='Search for GitHub repositories'
                           onFocus={(e: any) => e.target.placeholder = ''}
                           onBlur={(e: any) => e.target.placeholder = 'Search for GitHub repositories'}
                           onInput={handleSearchBarOnInput}
                           value={searchBar.input}/>
            </NavStyled>
        </HeaderStyled>
    );
};

export default Navigation;
