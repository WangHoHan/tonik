import {HomePageWrapper} from './HomePage.styled';
import React, {useEffect, useState} from 'react';
import {Dispatch} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsLoading} from '../../store/data/loading/selectors';
import {selectRepositoriesState} from '../../store/data/repositories/selectors';
import {initRepositories, getRepositories, setPageParam} from '../../store/data/repositories/actions';
import {RepositoriesInformation} from '../../intrafaces/RepositoriesInformation';
import LoadingElement from '../../shared/components/atoms/LoadingElement/LoadingElement';
import Table from '../../shared/components/organisms/Table/Table';
import {readFromCache, writeToCache} from '../../utils/cache';
import {LOCAL_NUMBER_OF_PER_PAGE, LOCAL_NUMBER_OF_PAGE} from '../../constants/localStorageKeys';

const HomePage: React.FC = (): JSX.Element => {
    const dispatch: Dispatch = useDispatch();
    const isLoading: boolean = useSelector(selectIsLoading);
    const repositories: any = useSelector(selectRepositoriesState);

    const [localPage, setLocalPage] = useState<number>(1);
    const [noPerPage, setNoPerPage] = useState<number>(20);

    useEffect((): void => {
        const searchBar: any = document.getElementById('search-bar');
        searchBar.disabled = false;
        const perPageNumber: string | null = readFromCache(LOCAL_NUMBER_OF_PER_PAGE);
        if (perPageNumber) {
            setNoPerPage(parseInt(perPageNumber));
        }
        const localPage: string | null = readFromCache(LOCAL_NUMBER_OF_PAGE);
        if (localPage) {
            setLocalPage(parseInt(localPage));
        }
        dispatch(initRepositories());
    }, []);

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
        writeToCache(LOCAL_NUMBER_OF_PAGE, (localPage - 1).toString());
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
        writeToCache(LOCAL_NUMBER_OF_PAGE, (localPage + 1).toString());
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
        writeToCache(LOCAL_NUMBER_OF_PAGE, '1');
    };

    return (
        <HomePageWrapper>
            {isLoading ?
                <LoadingElement/> :
                <>
                    <Table headers={['Name', 'Owner', 'Stars', 'Created at']}
                           bodies={repositories.elements.filter((element: RepositoriesInformation, index: number) => (index >= (localPage - 1) * noPerPage && index < localPage * noPerPage)).map((element: RepositoriesInformation) => [element.name, element.owner, element.stars, element.createdAt])}
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
