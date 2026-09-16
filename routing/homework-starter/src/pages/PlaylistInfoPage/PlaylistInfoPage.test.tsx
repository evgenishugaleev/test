import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PlaylistInfoPage } from './PlaylistInfoPage';
import { MemoryRouter, useParams } from 'react-router-dom';

jest.mock('../../data', () => ({
    PLAYLISTS: [
        {
            id: 0,
            genre: 'Rock',
            name: 'Great Rock Hits',
            songs: ["Tutti Frutti", "Let's Dance", 'Oh'],
        },
    ],
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

const mockedUseParams = useParams as jest.Mock;

const renderComponent = () => {
    return render(
    <MemoryRouter>
        <PlaylistInfoPage />
    </MemoryRouter>)
};

describe("Тест компонента PlaylistInfoPage", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Проверяем текст по умолчанию", () => {
        mockedUseParams.mockReturnValue({ playlistId: '999' });
        const { getByText } = renderComponent();

        expect(getByText('плейлиста с таким Id нет')).toBeDefined();
    });

    it("Проверяем данные о плейлисте при его наличии", () => {

        mockedUseParams.mockReturnValue({ playlistId: '0' });
        const { getByText, getAllByRole } = renderComponent();

        expect(getByText('Название: Great Rock Hits')).toBeInTheDocument();
        const listItems = getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
        expect(getByText('Жанр: Rock')).toBeInTheDocument();
    })
})