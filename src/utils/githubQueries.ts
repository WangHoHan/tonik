import {RepositoriesQueryParams} from '../intrafaces/RepositoriesQueryParams';

export const createRepositoriesSearchQuery = (repositoriesQueryParams: RepositoriesQueryParams): string => {
    if (repositoriesQueryParams.q) {
        return `q=${repositoriesQueryParams.q}${repositoriesQueryParams.sort ? `&sort=${repositoriesQueryParams.sort}` : ''}${repositoriesQueryParams.order ? `&order=${repositoriesQueryParams.order}` : ''}${repositoriesQueryParams.perPage ? `&per_page=${repositoriesQueryParams.perPage}` : ''}${repositoriesQueryParams.page ? `&page=${repositoriesQueryParams.page}` : ''}`;
    }
    return '';
};

//TODO
export const getRepositoriesQueryParamsFromUrl = (url: string): RepositoriesQueryParams => {
    return {q: 'tonik', sort: 'stars', order: 'desc', perPage: 30, page: 1};
};
