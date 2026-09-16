import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { UserInfoPage } from './UserInfoPage';
import { MemoryRouter, useParams } from 'react-router-dom';

jest.mock('../../data', () => {
    const PLAYLISTS = [
      {
        id: 0,
        genre: 'Rock',
        name: 'Great Rock Hits',
        songs: ['Tutti Frutti', "Let's Dance", 'Oh'],
      },
    ];
  
    const USERS = [
      {
        id: 0,
        email: 'Sophia3@gmail.com',
        fullName: 'Abraham Walsh',
        jobTitle: 'Investor Optimization Executive',
        avatar: 'https://avatars.githubusercontent.com/u/14016129',
        bio: 'Mollitia eos ducimus porro...',
        playlist: PLAYLISTS[0],
      },
    ];
  
    return { PLAYLISTS, USERS };
  });


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

const mockedUseParams = useParams as jest.Mock;

const renderComponent = () => {
    return render(
        <MemoryRouter>
            <UserInfoPage />
        </MemoryRouter>)
};

describe("Тест компонента UserInfoPage", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Проверяем текст по умолчанию", () => {
        mockedUseParams.mockReturnValue({ userId: '999' });
        const { getByText } = renderComponent();

        expect(getByText('пользователя с таким userId нет')).toBeDefined();
    });

    it("Проверяем данные о пользователи при его наличии", () => {

        mockedUseParams.mockReturnValue({ userId: '0' });
        const { getByText, getByRole } = renderComponent();

        expect(getByText('Sophia3@gmail.com')).toBeInTheDocument();
        expect(getByText('Abraham Walsh')).toBeInTheDocument();
        expect(getByRole('link')).toBeInTheDocument();
    })
})