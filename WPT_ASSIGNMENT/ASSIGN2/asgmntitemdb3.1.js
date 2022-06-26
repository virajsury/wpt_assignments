const url="";

let paramters={

    host : 'localhost',
    user :'root',
    password :'cdac',
    database :'node',
    port : 3306
};

const mysql = require("mysql2");
const connection=mysql.createConnection(paramters);
console.log("Db in working state");

let resource_id =1;
let resourcename  ='accounts';
let status   =true;

connection.query('insert into resource (resource_id,resourcename,status) values(?,?,?)',
[resource_id,resourcename,status] ,
(erro,res1)=>{
    if (erro) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}


);