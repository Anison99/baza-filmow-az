import React from 'react';
import './App.css';
import './Banner.css';
import Movie from './Movie';
import Navbar from './Navbar';
import Banner from './Banner';
import Shrek1 from './movie-images/shrek-1.jpg'
import Shining from './movie-images/shining.png'
import Alien from './movie-images/obcy.png'
import Stranger from './movie-images/stranger-things-3.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
    
    return (

        <div className="body">
            <Navbar /> 
            <Banner />
            <div>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Shrek1}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button" >ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Shining}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button">ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Alien}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button">ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Stranger}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button">ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="list-group list-group-horizontal-sm">
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Shrek1}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button" >ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Shining}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button">ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Alien}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button">ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item border-0">
                        <div className="movie">
                            <img src={Stranger}></img>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button class=" btn btn-success" type="button">ZOBACZ</button>
                            </div>
                        </div>
                    </li>
                </ul> 
             </div>
        </div>   
    );
}

export default App;