import {RepositoriesInformation} from './RepositoriesInformation';

export interface RepositoriesCacheEntry {
    repositoriesInformationList: RepositoriesInformation[],
    totalCount: number
}
