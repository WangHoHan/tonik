import {RepositoriesQueryParams} from '../intrafaces/RepositoriesQueryParams';

export const createRepositoriesSearchQuery = (repositoriesQueryParams: RepositoriesQueryParams): string => {
    if (repositoriesQueryParams.q) {
        return `?q=${repositoriesQueryParams.q}${repositoriesQueryParams.sort ? `&sort=${repositoriesQueryParams.sort}` : '&sort=stars'}${repositoriesQueryParams.order ? `&order=${repositoriesQueryParams.order}` : '&order=desc'}${repositoriesQueryParams.perPage ? `&per_page=${repositoriesQueryParams.perPage}` : '&per_page=30'}${repositoriesQueryParams.page ? `&page=${repositoriesQueryParams.page}` : '&page=1'}`;
    }
    return '';
};

export const getRepositoriesQueryParamsFromUrl = (url: string): RepositoriesQueryParams => {
    const repositoriesQueryParams: RepositoriesQueryParams = {q: '', sort: 'stars', order: 'desc', perPage: 30, page: 1};
    const q: RegExpMatchArray | null = url.match(/(\?q=(.*?)(&|$))/i);
    q && (repositoriesQueryParams.q = q[2]);
    const sort: RegExpMatchArray | null = url.match(/&sort=(\w+)(&|$)/i);
    sort && (repositoriesQueryParams.sort = sort[1]);
    const order: RegExpMatchArray | null = url.match(/&order=(asc|desc)(&|$)/i);
    order && (repositoriesQueryParams.order = order[1]);
    const perPage: RegExpMatchArray | null = url.match(/&per_page=(\d+)(&|$)/i);
    perPage && (repositoriesQueryParams.perPage = parseInt(perPage[1]));
    const page: RegExpMatchArray | null = url.match(/&page=(\d+)(&|$)/i);
    page && (repositoriesQueryParams.page = parseInt(page[1]));
    return repositoriesQueryParams;
};
