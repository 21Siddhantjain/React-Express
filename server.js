const express = require('express');

const app = express();

app.get('/api/customer',(req,res) => {
    const customer = [
        {id:1, firstName: 'Siddhant', lastName: 'Jain'} 
    ]
    res.json(customer)
})

app.get('/dat',(req,res)=>{
    res.send("Namaste")
})

const port = 5000;

app.listen(port, ()=> console.log(`server started on port ${port}`))
