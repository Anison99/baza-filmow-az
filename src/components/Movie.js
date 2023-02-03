import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movie.css';


const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        axios.get('https://at.usermd.net/api/movies')
            .then(res => {
                setMovies(res.data);
            })
    }, []);

    const handleClick = (id) => {
        const selected = movies.find(movie => movie.id === id);
        setSelectedMovie(selected);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div class="container" style={{ marginTop: '5%' }}>
            {movies.map(movie => (
                <div class="movie-item" key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.image} alt={movie.title} />
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center" style={{ marginTop: '5%' }}>
                        <button class=" btn btn-success" type="button" onClick={() => handleClick(movie.id)}>Opis</button>
                    </div>
                    <div>
                        </div>

                </div>

            ))}
            {showModal && (
                <div className=".modal">
                    <div className=".modal-content">
                        <span className=".close" onClick={closeModal}>&times;</span>
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Movie;
