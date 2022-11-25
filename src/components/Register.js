import React from 'react';

import './Login.css';
import '../App.css';

import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
    return (
        <div className="body">
            <Navbar />
            <div className="form-styled">
                <div>
                    <h1>Zarejestruj</h1>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicLogin">
                        <Form.Label>Podaj login</Form.Label>
                        <Form.Control type="login" placeholder="login" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Podaj email</Form.Label>
                        <Form.Control type="email" placeholder="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword1">
                        <Form.Label>Podaj haslo</Form.Label>
                        <Form.Control type="password" placeholder="haslo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Podaj ponownie haslo</Form.Label>
                        <Form.Control type="password" placeholder="haslo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Potwierdz wszystkie zgody" />
                    </Form.Group>
                    <button class=" btn btn-success" variant="primary" type="submit">Zarejestruj</button>
                </Form>
            </div>
        </div>
    );
}

export default Register;