import {HeaderStyled, NavStyled, SearchBar} from './Navigation.styled';
import React, {Dispatch, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectRepositoriesState} from '../../../store/data/repositories/selectors';
import {setQParam, getRepositories, setPageParam} from '../../../store/data/repositories/actions';

const Navigation: React.FC = (): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();
    const repositories: any = useSelector(selectRepositoriesState);

    const [searchBarInput, setSearchBarInput] = useState<string>('');

    useEffect((): () => void => {
        const delayDebounceFn: NodeJS.Timeout = setTimeout((): any => {
            if (searchBarInput) {
                const page: number = 1;
                dispatch(getRepositories({...repositories.queryParams, page}));
                dispatch(setPageParam(page));
            }
        }, 400);
        return (): void => clearTimeout(delayDebounceFn);
    }, [dispatch, repositories.queryParams.q]);

    const handleOnInput = (input: string): void => {
        setSearchBarInput(input);
        dispatch(setQParam(input));
    };

    return (
        <HeaderStyled>
            <NavStyled>
                <SearchBar id='search-bar'
                           type='text'
                           placeholder='Search for GitHub repositories'
                           onFocus={(e: any) => e.target.placeholder = ''}
                           onBlur={(e: any) => e.target.placeholder = 'Search for GitHub repositories'}
                           onInput={(e: any) => handleOnInput(e.target.value)}
                           value={searchBarInput}/>
            </NavStyled>
        </HeaderStyled>
    );
};

export default Navigation;
