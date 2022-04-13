import {HeaderStyled, NavStyled, SearchBar} from './Navigation.styled';
import React, {Dispatch, useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchRepositoriesRequest} from '../../../store/data/repositories/actions';

const Navigation: React.FC = (): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    const [input, setInput] = useState<string>('');

    const handleSearchBarOnInput = (e: any): void => {
        const word: string = e.target.value;
        setInput(word);
        dispatch(fetchRepositoriesRequest(word));
    };

    return (
        <HeaderStyled>
            <NavStyled>
                <SearchBar type='text'
                           placeholder='Search for GitHub repositories'
                           onFocus={(e: any) => e.target.placeholder = ''}
                           onBlur={(e: any) => e.target.placeholder = 'Search for GitHub repositories'}
                           onInput={handleSearchBarOnInput}
                           value={input}/>
            </NavStyled>
        </HeaderStyled>
    );
};

export default Navigation;
