import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
export default function Featured({ type }) {
  const movies = [
    "Genre",
    "Adventure",
    "Comedy",
    "Crime",
    "Fantasy",
    "Historical",
    "Horror",
    "Romance",
    "Sci-fi",
    "Thriller",
    "Western",
    "Animation",
    "Drama",
    "Documentary",
  ];
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            {movies.map((movie) => (
              <option>{movie}</option>
            ))}
          </select>
        </div>
      )}
      <img src={require("./img/cover.jpg")} />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Eu proident ipsum excepteur consectetur in eiusmod ex sunt culpa
          adipisicing labore ullamco eu ut. Dolore id exercitation esse aute
          laboris exercitation sit excepteur dolor ea excepteur sint. Nostrud
          laborum tempor deserunt anim adipisicing voluptate. Fugiat commodo
          duis dolor amet ipsum reprehenderit fugiat voluptate eiusmod.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
