import React , { useState,useEffect} from 'react'
// import { Button } from 'react-bootstrap'
import axios from 'axios';

export default function WithApi() {
    useEffect(() => {
        countryData();
      },[]);

    const [country, setCountry] = useState( 
        []
    );

    const countryData = () => {
        axios({
            method: 'get',
            url: 'https://consulting.palladiumhub.com/api/country/list',
        })
            .then(function (response) {
                if(response.status === 200 && response.data !== ''){
                    const data = response.data;
                    setCountry(
                         data.data,
                    );
                }                
            });
    }

    return (
        <>
        {/* <Button variant="success" onClick={countryData}>Get Country</Button> */}
        
            <h3 className="my-3"> Country Data with Api</h3>
            <table className="table table-bordered">
                <tr>
                    <th>ID</th>
                    <th>country</th>
                    <th>sort_name</th>
                    <th>phone_code</th>
                    <th>currency</th>
                    <th>code</th>
                    <th>created_at</th>
                    <th>updated_at</th>
                </tr>
                
                {country.map((countryData,index) => (
                    <tr key={index}>
                        <td>{countryData.id}</td>
                        <td>{countryData.country_name}</td>
                        <td>{countryData.sort_name}</td>
                        <td>{countryData.phone_code}</td>
                        <td>{countryData.currency}</td>
                        <td>{countryData.code}</td>
                        <td>{countryData.created_at}</td>
                        <td>{countryData.updated_at}</td>
                    </tr>
                ))}
            </table>

        </>
    )
}
