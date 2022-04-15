import {HeaderStyled, NavStyled, SearchBar} from './Navigation.styled';
import React, {Dispatch, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectRepositoriesState} from '../../../store/data/repositories/selectors';
import {setQParam, getRepositories, setPageParam} from '../../../store/data/repositories/actions';

const Navigation: React.FC = (): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();
    const repositories: any = useSelector(selectRepositoriesState);

    useEffect((): () => void => {
        const delayDebounceFn: NodeJS.Timeout = setTimeout((): any => {
            if (repositories.queryParams.q) {
                const page: number = 1;
                dispatch(getRepositories({...repositories.queryParams, page}));
                dispatch(setPageParam(page));
            }
        }, 400);
        return (): void => clearTimeout(delayDebounceFn);
    }, [dispatch, repositories.queryParams.q]);

    return (
        <HeaderStyled>
            <NavStyled>
                <SearchBar id='search-bar'
                           type='text'
                           placeholder='Search for GitHub repositories'
                           onFocus={(e: any) => e.target.placeholder = ''}
                           onBlur={(e: any) => e.target.placeholder = 'Search for GitHub repositories'}
                           onInput={(e: any) => dispatch(setQParam(e.target.value))}
                           value={repositories.queryParams.q}/>
            </NavStyled>
        </HeaderStyled>
    );
};

export default Navigation;
