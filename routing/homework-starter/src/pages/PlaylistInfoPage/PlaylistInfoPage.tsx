import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistInfoPage.css";

export function PlaylistInfoPage() {
	const { playlistId } = useParams();
	const playlist = PLAYLISTS[Number(playlistId)];

	if (!playlist) {
		return (
			<div className="userInfoPage">
				<h2>PlaylistInfoPage</h2>

				<div className="users">
					<p>плейлиста с таким Id нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="playlistsInfoPage">
			<h2>PlaylistInfoPage</h2>

			<div className="playlists">
				<Link to={`/playlists?searchGenre=${playlist.genre.toLowerCase()}`} className="playlistInfo">Жанр: {playlist.genre}</Link>
				<p className="playlistInfo">Название: {playlist.name}</p>
			</div>
			<ul className="songsList">
				{playlist.songs.map(song => (
					<li data-testid="SongItem" key={song}>{song}</li>
				))}
			</ul>
		</div>
	);
}