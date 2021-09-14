import React, {Datatable,useState,useEffect} from 'react'
// import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';
import { MDBDataTableV5 } from 'mdbreact';


export default function Datatable() {
    useEffect(() => {
        countryData();
    }, []);

    const [country, setCountry] = useState(
        []
    );
    const [datatable, setDatatable] = React.useState([]);

    const countryData = () => {
        axios({
            method: 'get',
            url: 'https://consulting.palladiumhub.com/api/country/list',
        })
            .then(function (response) {
                if (response.status === 200 && response.data !== '') {
                    const countryData = response.data.data;
                    // setDatatable(
                    //     data.data,
                    // );
                }
            });
    }

    const [datatable, setDatatable] = React.useState({
        
        columns: [
          { label: 'ID',field: 'id',width: 150,
            attributes: { 'aria-controls': 'DataTable', 'aria-label': 'ID'},
          },
          { label: 'Country',field: 'country',width: 270 },
          { label: 'Sort name',field: 'sort_name',width: 200 },
          { label: 'Phone code',field: 'phone_code',sort: 'asc',width: 100 },

          { label: 'Currency',field: 'currency',width: 150 },
          { label: 'Code',field: 'code',width: 100 },
          { label: 'Created Date',field: 'created_at',sort: 'disabled',width: 100 },
          { label: 'Apdated Date',field: 'updated_at',sort: 'disabled',width: 100  },
        ],
        rows: [
            {
                country: 'ddd' ,
                sort_name: 'Customer Support',
                phone_code: 'New York',
                currency: 'New York',
                code: '27',
                created_at: '2011/01/25',
                updated_at: '$112',
              },
        ],
      });
      console.log(datatable);
    
    //   return <MDBDataTableV5 hover scrollY maxHeight='50vh' data={datatable} />;
      return <MDBDataTableV5 hover scrollX scrollY maxHeight='300xp' data={widerData} />;
}
