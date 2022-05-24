const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'user_db'
    },
    console.log(`Connected to the Database.`)
);

module.exports = db;