const xampp = require("xampp");

const config ={
    host: process.env.HOST,
    user:process.env.USER,
    password: process.env.PASSWORD,
    database : process.env.DATABASE,
    connectionLimit:process.env.CONN_LIMIT, 
};

const pool = xampp.createPool(config);

module.exports= pool;
