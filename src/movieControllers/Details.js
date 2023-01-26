import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

import Navbar from '../components/Navbar';



import { useLocation } from "react-router-dom";


const Details = () => {
    const location = useLocation();
    const movie = location.state.movie;
    
    return (
        <div className="body">
            <Navbar />
            <div>
                <h1>{movie.name}</h1>
                <p><strong>Rezyseria:</strong> {movie.direction}</p>
                <p><strong>Scenariusz:</strong> {movie.scenario}</p>
                <p><strong>Gatunek:</strong> {movie.type}</p>
                <p><strong>Produkcja:</strong> {movie.production}</p>
                <p><strong>Rok premiery:</strong> {movie.release}</p>
                <p><strong>Opis: </strong>{movie.description}</p>
            </div>
        </div>
        
    );
}

export default Details;