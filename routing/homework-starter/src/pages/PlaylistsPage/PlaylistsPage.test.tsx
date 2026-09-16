import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { PlaylistsPage } from './PlaylistsPage';
import * as routerDom from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

const renderComponent = () => {
    return render(
        <MemoryRouter><PlaylistsPage /></MemoryRouter>
        )
};

describe("Тест компонента PlaylistsPage", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Проверяем что вызывается метод поиска по названию', () => {
        const setSearchParam = jest.fn();

        jest.spyOn(routerDom, 'useSearchParams').mockReturnValue([
            new URLSearchParams(),
            setSearchParam,
          ] as any);

        const { getByTestId } = renderComponent();

        fireEvent.input(getByTestId('SearchNameInput'), { target: { value: 'test-name-Search' }});

        expect(setSearchParam).toHaveBeenCalledWith({ searchName: 'test-name-search' })
    })

    it('Проверяем что вызывается метод поиска по жанру', () => {
        const setSearchParam = jest.fn();

        jest.spyOn(routerDom, 'useSearchParams').mockReturnValue([
            new URLSearchParams(),
            setSearchParam,
          ] as any);

        const { getByTestId } = renderComponent();

        fireEvent.input(getByTestId('SearchGenreInput'), { target: { value: 'test-genre-Search' }});

        expect(setSearchParam).toHaveBeenCalledWith({ searchGenre: 'test-genre-search' })
    })

})