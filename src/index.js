import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Navbar from './components/Navbar';
import Login from './components/Login';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='Login' element={<Login/>} />
        </Routes>
    </Router>,
    document.getElementById("root")
);