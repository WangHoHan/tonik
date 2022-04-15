import {HomePageWrapper} from './HomePage.styled';
import React, {useEffect} from 'react';
import {Dispatch} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoading} from '../../store/data/loading/selectors';
import {selectRepositories} from '../../store/data/repositories/selectors';
import {getRepositories, setPageParam} from '../../store/data/repositories/actions';
import {RepositoriesInformation} from '../../intrafaces/RepositoriesInformation';
import LoadingElement from '../../shared/components/atoms/LoadingElement/LoadingElement';
import Table from '../../shared/components/organisms/Table/Table';

const HomePage: React.FC = (): JSX.Element => {
    const dispatch: Dispatch = useDispatch();
    const loading: any = useSelector(selectLoading);
    const repositories: any = useSelector(selectRepositories);

    useEffect((): void => {
        const searchBar: any = document.getElementById('search-bar');
        searchBar.disabled = false;
    }, []);

    const handlePreviousPage = (): void => {
        if (repositories.queryParams.page > 1) {
            const page: number =  repositories.queryParams.page - 1;
            dispatch(getRepositories({...repositories.queryParams, page}));
            dispatch(setPageParam(page));
        }
    };

    const handleNextPage = (): void => {
        const page: number =  repositories.queryParams.page + 1;
        dispatch(getRepositories({...repositories.queryParams, page}));
        dispatch(setPageParam(page));
    };

    return (
        <HomePageWrapper>
            {loading.isLoading ?
                <LoadingElement/> :
                <>
                    <Table headers={['Name', 'Owner', 'Stars', 'Created at']}
                           bodies={repositories.elements.map((element: RepositoriesInformation) => [element.name, element.owner, element.stars, element.createdAt])}
                           currentPage={repositories.queryParams.page}
                           perPage={repositories.queryParams.perPage}
                           previousPage={handlePreviousPage}
                           nextPage={handleNextPage}/>
                </>
            }
        </HomePageWrapper>
    );
};

export default HomePage;
