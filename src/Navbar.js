import React from 'react';
import Logo from './logo-film.png';
import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-success shadow-sm">
            <div class="container">
                <a href="#" class="navbar-brand"><img src={Logo} width = "40px" height = "30px" class="d-inline-block align-middle mr-2"></img><span class="text-uppercase font-weight-bold">FILM BASE</span></a>

                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><a href="#" class="nav-link">HOME <span class="sr-only">(obecna)</span></a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Zaloguj</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Rejestruj</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Dodaj film</a></li>
                    </ul>
                </div>

                
            </div>
            <div class="container-fluid">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        
        );
}
export default Navbar