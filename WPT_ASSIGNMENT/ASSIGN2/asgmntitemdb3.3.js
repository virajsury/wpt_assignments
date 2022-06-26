const url=""
let paramaters={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"node",
    port:3306
};

const mysql=require("mysql2");
const connection=mysql.createConnection(paramaters);
console.log("Db is in working phase");

let resource_id=1;
connection.query("select resourcename, status from resource where  resource_id=?",
[resource_id],
(error,rows)=>{
    if (error) {
        console.log(error);  
    } else if(rows.length>0) {
        console.log(rows);   
       
    }

});