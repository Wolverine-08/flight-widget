const PORT = 8000;
const axios = require('axios')
const express = require('express');

require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(cors())


app.get('/flights', (req,res) => {
    const options = {
        url : `${process.env.URL}?page-size=11`,
        headers : {
            accept: 'application/json',
            'X-Cassandra-Token' : process.env.TOKEN
        }
    }
    axios.request(options).then(response => {
        console.log(response.data)
        res.json(response.data)
    }).catch(error => {
        console.log(error)
    })
})

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`))







