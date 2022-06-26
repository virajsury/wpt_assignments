const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'node',
	port:3306
}; // change port to 3306 that may be the port mostly.
const mysql = require('mysql2');
const connection=mysql.createConnection(dbparams);
console.log("db started");
