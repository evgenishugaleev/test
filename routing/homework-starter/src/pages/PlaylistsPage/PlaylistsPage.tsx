import { ChangeEvent } from "react";
import { PLAYLISTS } from "../../data";
import "./PlaylistsPage.css";
import { Link, useSearchParams } from "react-router-dom";

export function PlaylistsPage() {
	const [searchParam, setSearchParam] = useSearchParams();
	const currentSearchParams: Record<string, string> = {};

	searchParam.forEach((value, key) => {
		currentSearchParams[key] = value;
	});

	const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ ...currentSearchParams,
			searchGenre: value.toLowerCase(), });
	};

	const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target;
		setSearchParam({ ...currentSearchParams,
			searchName: value.toLowerCase(), });
	};

	const searchGenre = searchParam.get("searchGenre") || "";
	const searchName = searchParam.get("searchName") || "";

	const filteredPlaylists = PLAYLISTS.filter(({ genre, name }) =>
		genre.toLowerCase().includes(searchGenre) &&
		name.toLowerCase().includes(searchName)
	);

	return (
		<div className="playlistsPage">
			<h2>PlaylistsPage</h2>

			<div className="playlists">
				<label>
					введите жанр{" "}
					<input data-testid="SearchGenreInput" type="text" value={searchGenre} onChange={handleSearchGenre} />
				</label>
				<label>
					введите название{" "}
					<input data-testid="SearchNameInput" type="text" value={searchName} onChange={handleSearchName} />
				</label>

				{filteredPlaylists.filter(({genre}) => genre !== "Non Music").map(({ id, name }) => (
					<Link to={`/playlists/${id}`} key={id}>
						{name}
					</Link>
				))}
			</div>
		</div>
	);
}
