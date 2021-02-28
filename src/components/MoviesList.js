import React from 'react';
import "../styles/movieListStyles.css";

export default function MoviesList({ movies }) {
    const moviesDivs = movies.map((movie) => {
        return (
            <div className="movie-list-div">
                <img className="movie-list-poster" src={movie.Poster} />
                <h1 className="movie-list-title">{movie.Title}</h1>
            </div>
        );
    })
    console.log(movies)
    return (
        <div>
            {moviesDivs}
        </div>
    )
}
