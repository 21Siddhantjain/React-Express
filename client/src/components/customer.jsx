import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Customer() {

    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get('/api/customer')
        .then((res) => {
            setData(res.data[0])
        })
        .catch(err => console.log(err))
    },[])

    useEffect(()=>{
        axios.get('/dat')
        .then((res) => {
            console.log("data : ",res.data)
        })
    })

    return (
        <div className="App">
        <h2>Customer</h2>
        <p>{data.firstName}</p>
        </div>
    );
}

export default Customer;
