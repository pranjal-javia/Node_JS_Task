const {Pool} = require('pg');
const  { drizzle } = require('drizzle-orm/node-postgres');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DATABASE_PORT,
});

pool.on('connect', () => {
    console.log("Database connected");
});

const db = drizzle({ client: pool })

const query = (q, params = []) => {
    return pool.query(q, params)
}

module.exports = {db};