import {HeaderStyled, NavStyled, SearchBar} from './Navigation.styled';
import React, {Dispatch, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getRepositories} from '../../../store/data/repositories/actions';

const Navigation: React.FC = (): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    const [input, setInput] = useState<string>('');

    useEffect((): () => void => {
        const delayDebounceFn: NodeJS.Timeout = setTimeout((): any => {
            if (input) {
                dispatch(getRepositories({
                    q: input,
                    sort: 'stars',
                    order: 'asc',
                    perPage: 30,
                    page: 1
                }));
            }
        }, 400);
        return (): void => clearTimeout(delayDebounceFn);
    }, [dispatch, input]);

    return (
        <HeaderStyled>
            <NavStyled>
                <SearchBar id='search-bar'
                           type='text'
                           placeholder='Search for GitHub repositories'
                           onFocus={(e: any) => e.target.placeholder = ''}
                           onBlur={(e: any) => e.target.placeholder = 'Search for GitHub repositories'}
                           onInput={(e: any) => setInput(e.target.value)}
                           value={input}/>
            </NavStyled>
        </HeaderStyled>
    );
};

export default Navigation;
