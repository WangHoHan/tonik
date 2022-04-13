import {HomePageWrapper} from './HomePage.styled';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectRepositories} from '../../store/data/repositories/selectors';
import {RepositoriesInformation} from '../../intrafaces/RepositoriesInformation';
import Table from '../../shared/components/organisms/Table/Table';

const HomePage: React.FC = (): JSX.Element => {
    const repositories: any = useSelector(selectRepositories);

    return (
        <HomePageWrapper>
            <Table headers={['Name', 'Owner', 'Stars', 'Created at']}
                   bodies={repositories.elements.map((element: RepositoriesInformation) => [element.name, element.owner, element.stars, element.createdAt])}/>
        </HomePageWrapper>
    );
};

export default HomePage;
