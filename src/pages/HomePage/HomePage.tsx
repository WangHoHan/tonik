import React, {Dispatch} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectRepositories} from '../../store/data/repositories/selectors';
import {RepositoriesInformation} from "../../intrafaces/RepositoriesInformation";

const HomePage: React.FC = (): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();
    const repositories: any = useSelector(selectRepositories);

    return (
        <>
            {repositories.elements.map((repository: RepositoriesInformation) => {
                console.log(repository)
            })};
        </>
    );
};

export default HomePage;
