import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ data }) => {
    const { title, poster_path, overview, vote_average, release_date } = data;
    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-over">
                <h2>{title}</h2>
                <div className="ratings">
                    <strong>Rel:</strong>
                    <span className="release">{`${release_date}`}</span> <br />
                    <strong>Vote:</strong>
                    <span className="vote">{vote_average}</span>
                </div>
                <p>{`${overview.substring(0, 200)}...`}</p>
            </div>
        </div>
    );
};

export default Movie;
