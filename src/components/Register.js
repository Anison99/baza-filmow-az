import React, { useState} from 'react';
import axios from 'axios';

import './Login.css';
import '../App.css';

import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function signUp() {
        
        let item = { name, password, email }
        console.warn(item)
    }




    return (
        <div className="body">
            <Navbar />
            <div className="form-styled">
                <div>
                    <h1>Zarejestruj</h1>
                </div>

                <div className="col-sm-9 offset-sm-0.5">
                    <text style={{ fontSize: '20px' }}>Login</text> 
                    <input type="text" value={name } onChange={(e) => setName(e.target.value)} className="form-control" placeholder="podaj login"></input>
                    < br />

                    <text style={{ fontSize: '20px' }}>Haslo</text>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="podaj haslo"></input>
                    < br />

                    <text style={{ fontSize: '20px' }}>Email</text>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="podaj email"></input>
                    < br />

                    <button onClick={signUp} className=" btn btn-success">Zarejestruj</button>
                </div>
                
            </div>
        </div>
    );
}
export default Register;