import React from 'react';
import {render, screen} from '@testing-library/react';
import TableNavigation from '../TableNavigation';

describe('TableNavigation', (): void => {
    it('should render TableNavigation component properly', (): void => {
        render(<TableNavigation isPreviousDisabled={false} previousPage={() => {}} isNextDisabled={false} nextPage={() => {}} isChangePerPageDisabled={() => false} pageNumber={1} changePerPage={() => {}}/>);
        const perPage: HTMLElement = screen.getByText(/per page/i);
        expect(perPage).toBeInTheDocument();
    });

    it('should render previous page enabled', (): void => {
        render(<TableNavigation isPreviousDisabled={false} previousPage={() => {}} isNextDisabled={false} nextPage={() => {}} isChangePerPageDisabled={() => false} pageNumber={1} changePerPage={() => {}}/>);
        const previousPage: HTMLElement = screen.getByText(/< previous page/i);
        expect(previousPage).toBeEnabled();
    });

    it('should render previous page disabled', (): void => {
        render(<TableNavigation isPreviousDisabled={true} previousPage={() => {}} isNextDisabled={false} nextPage={() => {}} isChangePerPageDisabled={() => false} pageNumber={1} changePerPage={() => {}}/>);
        const previousPage: HTMLElement = screen.getByText(/< previous page/i);
        expect(previousPage).toBeDisabled();
    });

    it('should render next page enabled', (): void => {
        render(<TableNavigation isPreviousDisabled={false} previousPage={() => {}} isNextDisabled={false} nextPage={() => {}} isChangePerPageDisabled={() => false} pageNumber={1} changePerPage={() => {}}/>);
        const nextPage: HTMLElement = screen.getByText(/next page >/i);
        expect(nextPage).toBeEnabled();
    });

    it('should render next page disabled', (): void => {
        render(<TableNavigation isPreviousDisabled={false} previousPage={() => {}} isNextDisabled={true} nextPage={() => {}} isChangePerPageDisabled={() => false} pageNumber={1} changePerPage={() => {}}/>);
        const nextPage: HTMLElement = screen.getByText(/next page >/i);
        expect(nextPage).toBeDisabled();
    });
});
