const { Pool } = require("pg");

const pool = new Pool({
        // we don't have to actually have an object here because postgres will know that by default it will look for environment variables in a .env file to find credentials
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT, // default port
    }
);

// get all creators
const getAllCreators = async () => {
    try {
        const creators = await pool.query("SELECT * FROM creators;");
        return creators.rows;
    } catch(err) {
        console.log("getAllCreators error: ", err);
    }
}

// insert a creator
const insertCreator = async (name, img, channelURL) => {
    try {
        // const results = await pool.query("INSERT INTO creators(name, avatar, channelurl) values($1, $2, $3) returning *;", [channelData.name, channelData.avatarURL, channelData.url]);
        const results = await pool.query("INSERT INTO creators(name, avatar, channelurl) values($1, $2, $3) returning *;", [name, img, channelURL]);
        return results;
    } catch(err) {
        console.log("insertCreator error: ", err);
    }
}

module.exports = {
    // query: (text, params) => pool.query(text, params),
    "getAllCreators": getAllCreators,
    "insertCreator": insertCreator
};