import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='Login' element={<Login />} />
            <Route path='Register' element={<Register /> }/>
        </Routes>
    </Router>,
    document.getElementById("root")
);