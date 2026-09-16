import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { UsersPage } from './UsersPage';
import * as routerDom from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

const renderComponent = () => {
    return render(
        <MemoryRouter><UsersPage /></MemoryRouter>
        )
};

describe("Тест компонента UsersPage", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Проверяем что вызывается метод поиска', () => {
        const setSearchParam = jest.fn();

        jest.spyOn(routerDom, 'useSearchParams').mockReturnValue([
            new URLSearchParams(),
            setSearchParam,
          ] as any);

        const { getByTestId } = renderComponent();

        fireEvent.input(getByTestId('SearchInput'), { target: { value: 'test-Search' }});

        expect(setSearchParam).toHaveBeenCalledWith({ searchName: 'test-search' })
    })

})