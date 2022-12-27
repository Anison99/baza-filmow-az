import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Details from './movieControllers/Details';
import AddMovie from './movieControllers/AddMovie';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='Login' element={<Login />} />
            <Route path='Register' element={<Register /> }/>
            <Route path='Details' element={<Details />} />
            <Route path='Add' element={<AddMovie />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);