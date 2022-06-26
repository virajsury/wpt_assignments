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


let itemname ='pencil';  //assume this came from http request


connection.query('select itemno,price,category from item where itemname=?', [itemname], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else 
        // if(rows.length>0){
        //     console.log(rows.itemno);}
        console.log(rows);
        }    
       
    

);