import React from 'react';
import Logo from './logo-film.png';
import './Navbar.css';
import Login from './Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        // do zakładki login
        navigate('/Login');
    };
    
    return (
        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-success shadow-sm">
            <div class="container">
                <a href="#" class="navbar-brand"><img src={Logo} width = "50px" height = "40px" class="d-inline-block align-middle mr-2"></img><span class="text-uppercase font-weight-bold">FILM BASE</span></a>
                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><a href="#" class="nav-link">HOME <span class="sr-only">(obecna)</span></a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Dodaj film</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Filtruj</a></li>
                    </ul>
                </div> 
            </div>

            <div class="container-fluid">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Szukaj" aria-label="Szukaj"></input>
                    <button class="btn btn-light" type="submit">Szukaj</button>
                </form>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-outline-light" type="button" onClick={navigateToLogin}>Zaloguj</button>
                <button class=" btn btn-light" type="button">Zarejestruj</button>
            </div>
            
        </nav>
        );
}
export default Navbar;