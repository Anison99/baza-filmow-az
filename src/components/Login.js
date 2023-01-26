import React, { useState, useEffect } from 'react';
import axios from 'axios';


import './Login.css';
import '../App.css';

import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://at.usermd.net/api/user/auth', {
            email: email,
            password: password
          
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setIsAuthenticated(true);
            })
    }

    const handleLogout = () => {
        //usuwanie danych z sesji lub localStorage
        setIsAuthenticated(false);
    }


    return (
        <div className="body">
            <Navbar />
            <div className="form-styled">
                <div>
                    <h1>Zaloguj</h1>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Podaj email</Form.Label>
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Podaj haslo</Form.Label>
                        <Form.Control type="password" placeholder="haslo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Zapamietaj mnie" />
                    </Form.Group>
                    {isAuthenticated ? (
                        <button class=" btn btn-danger" variant="primary" onClick={handleLogout}>Wyloguj</button>
                    ) : (
                            <button class=" btn btn-success" variant="primary" type="submit" onClick={handleSubmit}>Zaloguj </button>
                    )}
                </Form>
            </div>
        </div>
    );

}

export default Login;