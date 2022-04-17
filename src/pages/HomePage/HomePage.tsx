import {HomePageWrapper} from './HomePage.styled';
import React, {useEffect, useState} from 'react';
import {Dispatch} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsLoading} from '../../store/data/loading/selectors';
import {selectRepositoriesState} from '../../store/data/repositories/selectors';
import {initRepositories, getRepositories, setSortParam, setOrderParam, setPageParam} from '../../store/data/repositories/actions';
import {RepositoriesInformation} from '../../intrafaces/RepositoriesInformation';
import LoadingElement from '../../shared/components/atoms/LoadingElement/LoadingElement';
import Table from '../../shared/components/organisms/Table/Table';
import {readFromCache, writeToCache} from '../../utils/cache';
import {LOCAL_NUMBER_OF_PER_PAGE, REPOSITORIES_LOCAL_NUMBER_OF_PAGE, REPOSITORIES_SORT_OPTION, REPOSITORIES_ORDER_OPTION} from '../../constants/localStorageKeys';

const HomePage: React.FC = (): JSX.Element => {
    const dispatch: Dispatch = useDispatch();
    const isLoading: boolean = useSelector(selectIsLoading);
    const repositories: any = useSelector(selectRepositoriesState);

    const sortMap: Map<number, string> = new Map([
        [0, 'stars'],
        [1, 'forks'],
        [2, 'updated']
    ]);
    const orderMap: Map<number, string> = new Map([
        [0, 'asc'],
        [1, 'desc']
    ]);

    const [localPage, setLocalPage] = useState<number>(1);
    const [noPerPage, setNoPerPage] = useState<number>(20);

    useEffect((): void => {
        const searchBar: any = document.getElementById('search-bar');
        searchBar.disabled = false;
        const perPageNumber: string | null = readFromCache(LOCAL_NUMBER_OF_PER_PAGE);
        if (perPageNumber) {
            setNoPerPage(parseInt(perPageNumber));
        }
        const localPage: string | null = readFromCache(REPOSITORIES_LOCAL_NUMBER_OF_PAGE);
        if (localPage) {
            setLocalPage(parseInt(localPage));
        }
        setSortOption();
        setOrderOption();
        dispatch(initRepositories());
    }, []);

    useEffect((): void => {
        setSortOption()
        setOrderOption();
    }, [repositories]);

    const setSortOption = (): void => {
        const sortRepositories: any = document.getElementById('sort-repositories');
        if (sortRepositories) {
            const repositoriesSortOption: string | null = readFromCache(REPOSITORIES_SORT_OPTION);
            if (repositoriesSortOption) {
                sortRepositories.options.selectedIndex = parseInt(repositoriesSortOption);
            } else {
                sortRepositories.options.selectedIndex = 0;
            }
        }
    };

    const setOrderOption = (): void => {
        const orderRepositories: any = document.getElementById('order-repositories');
        if (orderRepositories) {
            const repositoriesOrderOption: string | null = readFromCache(REPOSITORIES_ORDER_OPTION);
            if (repositoriesOrderOption) {
                orderRepositories.options.selectedIndex = parseInt(repositoriesOrderOption);
            } else {
                orderRepositories.options.selectedIndex = 0;
            }
        }
    };

    const handleSortChange = (index: number): void => {
        const sort: string | undefined = sortMap.get(index);
        if (sort) {
            dispatch(getRepositories({...repositories.queryParams, sort, page: 1}));
            dispatch(setSortParam(sort));
            dispatch(setPageParam(1));
            setLocalPage(1);
            writeToCache(REPOSITORIES_LOCAL_NUMBER_OF_PAGE, '1');
            writeToCache(REPOSITORIES_SORT_OPTION, index.toString());
        }
    };

    const handleOrderChange = (index: number): void => {
        const order: string | undefined = orderMap.get(index);
        if (order) {
            dispatch(getRepositories({...repositories.queryParams, order, page: 1}));
            dispatch(setOrderParam(order));
            dispatch(setPageParam(1));
            setLocalPage(1);
            writeToCache(REPOSITORIES_LOCAL_NUMBER_OF_PAGE, '1');
            writeToCache(REPOSITORIES_ORDER_OPTION, index.toString());
        }
    };

    const checkIfPreviousIsDisabled = (): boolean => {
        return (repositories.queryParams.page === 1 && localPage === 1);
    };

    const handlePreviousPage = (): void => {
        if (localPage > 1) {
            setLocalPage(localPage - 1);
        } else {
            if (repositories.queryParams.page > 1) {
                const page: number = repositories.queryParams.page - 1;
                dispatch(getRepositories({...repositories.queryParams, page}));
                dispatch(setPageParam(page));
            }
        }
        writeToCache(REPOSITORIES_LOCAL_NUMBER_OF_PAGE, (localPage - 1).toString());
    };

    const checkIfNextIsDisabled = (): boolean => {
        return !((repositories.totalCount / noPerPage > calculatePageNumber())
            && (calculatePageNumber() < Math.ceil(1000 / noPerPage)));
    };

    const handleNextPage = (): void => {
        if (localPage < 20 / noPerPage) {
            setLocalPage(localPage + 1);
        } else {
            const page: number = repositories.queryParams.page + 1;
            dispatch(getRepositories({...repositories.queryParams, page}));
            dispatch(setPageParam(page));
            setLocalPage(1);
        }
        writeToCache(REPOSITORIES_LOCAL_NUMBER_OF_PAGE, (localPage + 1).toString());
    };

    const checkIfChangePerPageIsDisabled = (perPageNumber: number): boolean => {
        return (noPerPage === perPageNumber);
    };

    const calculatePageNumber = (): number => {
        return (repositories.queryParams.page - 1) * 20 / noPerPage + localPage;
    };

    const changePerPage = (perPageNumber: number): void => {
        dispatch(getRepositories({...repositories.queryParams, page: 1}));
        dispatch(setPageParam(1));
        setLocalPage(1);
        setNoPerPage(perPageNumber);
        writeToCache(LOCAL_NUMBER_OF_PER_PAGE, perPageNumber.toString());
        writeToCache(REPOSITORIES_LOCAL_NUMBER_OF_PAGE, '1');
    };

    return (
        <HomePageWrapper>
            {isLoading ?
                <LoadingElement/> :
                <>
                    <Table headers={['Name', 'Owner', 'Stars', 'Created at']}
                           bodies={repositories.elements.filter((element: RepositoriesInformation, index: number) => (index >= (localPage - 1) * noPerPage && index < localPage * noPerPage)).map((element: RepositoriesInformation) => [element.name, element.owner, element.stars, element.createdAt])}
                           sortId='sort-repositories'
                           sorts={['Stars', 'Forks', 'Updated']}
                           orderId={'order-repositories'}
                           orders={['Ascending', 'Descending']}
                           onSortChange={handleSortChange}
                           onOrderChange={handleOrderChange}
                           isPreviousDisabled={checkIfPreviousIsDisabled()}
                           previousPage={handlePreviousPage}
                           isNextDisabled={checkIfNextIsDisabled()}
                           nextPage={handleNextPage}
                           isChangePerPageDisabled={checkIfChangePerPageIsDisabled}
                           pageNumber={calculatePageNumber()}
                           changePerPage={changePerPage}/>
                </>
            }
        </HomePageWrapper>
    );
};

export default HomePage;
