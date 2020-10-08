const express = require('express');
const cors = require("cors");
const db = require("./db");
require ("dotenv").config();

// initialize app
const app = express();

// middleware
app.use(cors());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
// })
app.use(express.json());

// 'async' is added bc we're going to interact w/ our DB, scrapers, etc
app.get('/creators', async (req, res) => {
    // const creators = [
    //     {name: 'Code Drip', img: 'https://'},
    //     {name: 'Dave Lee', img: 'https://'},
    //     {name: 'MKBHD', img: 'https://'}
    // ]
    // // todo: get from DB
    // res.send(creators);
    try {
        // const creators = await fetch 
    } catch(err) {
        console.log("Error: ", err);
    }

});

app.post('/creators', async (req, res) => {
    console.log(req.body);
    // todo scrape channel
    // todo add to DB
    res.send("success");
})

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`App running and listening on port ${port}`)
})