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


let itemno ='3';  //assume this came from http request
let itemname ='pencil';  //assume this came from http request
let price ='55';  //assume this came from http request
let category ='drawing';

connection.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', [itemno,itemname,price,category], 
(err, res1) => {
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);