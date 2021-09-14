import React, { useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'

export default function ApiCrud() {

    const youtubeData = () => {
        const data = link.vlink;
        axios.post('https://trains.p.rapidapi.com/', {
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'trains.p.rapidapi.com',
                'x-rapidapi-key': '735d9faec5mshf651f25ef346469p16d865jsn0d33b8ed1846'
            }
        },
            {
                data: {
                    'search': data
                }
            }
        )
            .then(function (response) {
                console.log(response)
                if (response.status === 200 && response.data !== '') {
                    const data = response.data;
                    setLink(
                        data.data,
                    );
                }
            });
    }

    const [link, setLink] = useState({
        vlink: '',
    });

    const changevalue = (e) => {
        let value = e.target.value;
        setLink({
            ...link,
            [e.target.name]: value,
        });
    }

    return (
        <>
            <div className="container my-5">
                <div className="form-group">
                    {/* <label className="details">Enter video Link</label> */}
                    <h4>Enter trains name :-</h4>
                    <input type="text" className="form-control" placeholder="e.g Rajdhani" name="vlink" defaultValue={link.vlink} id="cpassword" onChange={(e) => changevalue(e)} required />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>

                <Button variant="success my-3" onClick={youtubeData}>Submit</Button>
                {/* <h3 className="my-3"> Country Data with Api</h3> */}
            </div>


        </>
    )
}
