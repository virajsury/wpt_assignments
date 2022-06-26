const express=require("express");
const app = express();

const mysql = require('mysql2');
const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'node',
	port:3306
}
const con=mysql.createConnection(dbparams);



// let details =[{acno:111,balance:5000},{acno:222,balance:5500},
//     {acno:333,balance:6000},{acno:111,balance:6500},];


    app.use(express.static("sf")) ;

    app.get("/account",(req,resp)=>{
        let acno=req.query.acno;
        console.log("acno from box"+acno);
        let output={status :false ,balance:{}}

        con.query('select balance from  accountdetails  where acnno=?', [acno], 
        (err, rows) => {

            if(err){
                console.log("error has occured : "+err)
            }
            else if(rows.length>0){
                output.status=true
                output.balance=rows[0];
            }

            resp.send(output);

        });

        
    //     for(let i=0;i<details.length;i++){
    //     if(acno==details[i].acno){
    //         output.status=true;
    //         output.balance=details[i];
    //     }
    // }
      

    });
    app.listen(900, function () {
        console.log("server listening at port 900...");
    });