const express = require('express');
const cors = require("cors");
const db = require("./db");
const scrapers = require("./scrapers");
const path = require("path");

require ("dotenv").config();

// initialize app
const app = express();

// middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../client')))
app.use(express.json());
// alternate cors
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
// })

// 'async' is added bc we're going to interact w/ our DB, scrapers, etc
app.get("/", async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    } catch(err) {
        console.log("Error: ", err);
    }
})

app.get('/creators', async (req, res) => {
    try {
        // const creators = await db.query("SELECT * FROM creators;")
        // res.send(creators);
        const results = await db.getAllCreators();
        // console.log("results: ", results)
        res.send(results);
            // .json({
            //     status: "success",
            //     results: results.rows
            // })
        // console.log(path.join(__dirname, '../client'));
    } catch(err) {
        console.log("Error: ", err);
    }
});

app.post('/creators', async (req, res) => {
    try {
        console.log("req.body: ", req.body);
        // scrape channel
        const channelData = await scrapers.scrapeChannel(req.body.channelURL);
        const results_after = db.insertCreator(channelData.name, channelData.avatarURL, req.body.channelURL);
        console.log(channelData);
        // todo add to DB
        res.send("success");
    } catch(err) {
        console.log("Error: ", err);
    }
})

const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`App running and listening on port ${port}`)
})