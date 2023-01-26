import React, { useState } from 'react';

import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import moviesDetails from '../movieDescriptions/moviesDetails';
import Navbar from '../components/Navbar';

import axios from 'axios';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            image: image,
            content: content
        };
        try {
            await axios.post('https://at.usermd.net/api/movies', data);
            // po pomyœlnym dodaniu filmu, mo¿na wyœwietliæ komunikat o sukcesie lub przekierowaæ na inn¹ stronê
            console.log("Film zosta³ dodany.");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="body">
            <Navbar />
            <div className="form-styled">
                <div className="col-sm-9 offset-sm-0.5">
                    <h1>Dodaj film</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nazwa:
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                    </label>
                    <br />
                    <label>
                        Opis:
                            <input value={content} onChange={e => setContent(e.target.value)} className="form-control"></input>
                    </label>
                    <br />
                    <label>
                        Zdjecie (link)
                            <input type="text" value={image} onChange={e => setImage(e.target.value)} className="form-control" />
                    </label>
                        <br />
                        <br />
                        <button type="submit" className=" btn btn-success">Dodaj film</button>
                    </form>
                </div>
          
            </div>
        </div>
    );

};

export default AddMovie;

