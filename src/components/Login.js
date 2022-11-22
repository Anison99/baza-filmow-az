import React from 'react';

import './Login.css';
import '../App.css';

import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";
import {MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBIcon, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';

const Login = () => {
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
                    <button class=" btn btn-success" variant="primary" type="submit">Zaloguj</button>
                </Form>
            </div>
        </div>
        

    );
}

export default Login;