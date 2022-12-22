import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Details from './movieControllers/Details';
import NewMovie from './movieControllers/NewMovie';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='Login' element={<Login />} />
            <Route path='Register' element={<Register /> }/>
            <Route path='Details' element={<Details />} />
            <Route path='Add' element={<NewMovie />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);