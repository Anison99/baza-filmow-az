import React from 'react';
import './App.css';
import './components/Banner.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movie from './components/Movie';
import moviesDetails from './movieDescriptions/moviesDetails';

import Shrek1 from './movie-images/shrek-1.jpg'
import Shining from './movie-images/shining.png'
import Alien from './movie-images/obcy.png'
import Stranger from './movie-images/stranger-things-3.jpg'

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";


const App = () => {
    const navigate = useNavigate();

    const handleClick = (index) => {
        navigate('/Details', { state: { movie: moviesDetails[index] } });
    };

    return (
        <div className="body">
            <Navbar />
            <Banner />
            <Movie />
            {/* 
            <div>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Shrek1} alt={moviesDetails[0].name}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button id="shrek_button" class=" btn btn-success" type="button" onClick={() => handleClick(0)}>ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Shining} alt={moviesDetails[1].name}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button" onClick={() => handleClick(1)}>ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Alien} alt={moviesDetails[2].name}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button id="alien_button" class=" btn btn-success" type="button" onClick={() => handleClick(2)}>ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Stranger} alt={moviesDetails[3].name}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button id="stranger_button" class=" btn btn-success" type="button" onClick={() => handleClick(3)}>ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Shrek1} alt={moviesDetails[0].name}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button id="shrek_button" class=" btn btn-success" type="button" onClick={() => handleClick(0)}>ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Shining} alt={moviesDetails[1].name}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button" onClick={() => handleClick(1)}>ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Alien} alt={moviesDetails[2].name}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button id="alien_button" class=" btn btn-success" type="button" onClick={() => handleClick(2)}>ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Stranger} alt={moviesDetails[3].name}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button id="stranger_button" class=" btn btn-success" type="button" onClick={() => handleClick(3)}>ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>

                <br/> 
                <h3>Przygotowanie przez Anita Zych </h3>
                <h3>na potrzeby projektu Programowanie Reaktywne II</h3>
            </div>

            */}
            
        </div>   
    );
}

export default App;