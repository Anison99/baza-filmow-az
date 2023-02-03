import React, { useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

import './Login.css';
import '../App.css';

import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {

    const [state, setState] = useState({account: {username: '', email: '', password: ''}})
    const [error, setError] = useState({})

    const navigate = useNavigate();

    const validate = () => {
        const errors = {};

        if (state.account.username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (state.account.email.trim() === '') {
            errors.password = 'Email is required!';
        }
        if (state.account.password.trim() === '') {
            errors.password = 'Password is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        setError({errors: errors || {}});
        if (errors) return;

        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/user/create',
            data: {
                name: state.account.username,
                email: state.account.email,
                password: state.account.password
            }
        }).then((response) => {
            console.log(state.account)
            navigate('/');
        }).catch((error) => {
            const errors = {};
            console.log(state.account)
            errors.password = 'Given username doesn\'t exists or password is wrong!';
            setError({errors: errors || {}});
            console.log(error);
            console.log('nie wysłano')
        });
    };

    const handleChange = (event) => {
        const account = {...state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        setState({account});
    };

    return (
        <div className="body">
            <Navbar />
            <div className="form-styled">
                <div>
                    <h1>Zarejestruj</h1>
                </div>

                <div className="col-sm-9 offset-sm-0.5">
                    <div>
                    <text style={{ fontSize: '15px' }}>Login</text> 
                    <input type="text" name="username" id="username" value={state.account.username} onChange={handleChange} className="form-control" placeholder="podaj login" />
                    {error.username && <div className="alert alert-danger">{error.username}</div>}
                    </div>
                    < br />
                    <div>
                    <text style={{ fontSize: '15px' }}>Haslo</text>
                    <input type="password" id="password" name="password" value={state.account.password} onChange={handleChange} className="form-control" placeholder="podaj haslo"/>
                    {error.password && <div className="alert alert-danger">{error.password}</div>}
                    </div>
                    < br />
                    
                    <div>
                    <text style={{ fontSize: '15px' }}>Email</text>
                    <input type="text" id="email" name="email" value={state.account.email} onChange={handleChange} className="form-control" placeholder="podaj email"/>
                        {error.email && <div className="alert alert-danger">{error.email}</div>}
                    </div>
                    < br />

                    <button type="submit" onChange={handleSubmit} className=" btn btn-success">Zarejestruj</button>
                </div>
                
            </div>
        </div>
    );
}
export default Register;