import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('https://at.usermd.net/api/movies')
            .then(res => {
                setMovies(res.data);
            })
    }, []);
    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.image} alt={movie.title} />
                    <p>{movie.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Movie;
