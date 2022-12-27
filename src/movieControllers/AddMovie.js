import React, { useState } from 'react';

import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import moviesDetails from '../movieDescriptions/moviesDetails';
import Navbar from '../components/Navbar';

const AddMovie = () => {
    const [movies, setMovies] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [direction, setDirection] = useState('');
    const [scenario, setScenario] = useState('');
    const [type, setType] = useState('');
    const [production, setProduction] = useState('');
    const [release, setRelease] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMovies([...movies, { name, image, description, direction, scenario, type, production, release }]);
        setName('');
        setDescription('');
        setDirection('');
        setScenario('');
        setType('');
        setProduction('');
        setRelease('');
        setImage('');

        moviesDetails.push({
            name,
            image,
            description,
            direction,
            scenario,
            type,
            production,
            release
        });
    };

    return (
        <div className="body">
            <Navbar />
            <div className="form-styled">
                <form onSubmit={handleSubmit} >
                    <label htmlFor="name">Tyul filmu:<br /> </label>
                    <p></p>
                    <input
                        className="mb-3"
                        type="text"
                        placeholder="Movie name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <p></p>

                    <label htmlFor="image">Obraz:<br /> </label>
                    <p></p>
                    <input
                        className="mb-3"
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                    <p></p>

                    <label htmlFor="image">Opis: <br /> </label>
                    <p></p>
                    <input
                        className="mb-3"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <p></p>

                    <label htmlFor="image">Rezyseria: <br /> </label>
                    <p></p>
                    <input
                        className="mb-3"
                        type="text"
                        placeholder="Direction"
                        value={direction}
                        onChange={(event) => setDirection(event.target.value)}
                    />
                    <p></p>
                    
                    <label htmlFor="image">Scenariusz: <br /> </label>
                    <p></p>
                    <input
                        className="mb-3"
                        type="text"
                        placeholder="Scenario"
                        value={scenario}
                        onChange={(event) => setScenario(event.target.value)}
                    />
                    <p></p>

                    <label htmlFor="image">Typ: <br /> </label>
                    <p></p>
                    <input
                        className="mb-3"
                        type="text"
                        placeholder="Type"
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                    />
                    <p></p>
                    <label htmlFor="image">Produkcja: <br /> </label>
                    <p></p>
                    <input
                        className="mb-3"
                        type="text"
                        placeholder="Production"
                        value={production}
                        onChange={(event) => setProduction(event.target.value)}
                    />
                    <p></p>
                    <label htmlFor="image">Rok wydania: <br /> </label>
                    <p></p>
                    <input
                        className="mb-3"
                        type="text"
                        placeholder="Release"
                        value={release}
                        onChange={(event) => setRelease(event.target.value)}
                    />
                    <p></p>
                    <button class=" btn btn-success" variant="primary" type="submit">Dodaj film</button>
                </form>
            </div>
        </div>
    );

};

export default AddMovie;

