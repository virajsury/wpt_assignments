const express=require("express");
const app = express();

// let data =[{city:"pune",pincode:111},
//     {city:"mumbai",pincode:222},
//     {city:"delhi",pincode:333},
//     {city:"jaipur",pincode:444}]


const mysql = require('mysql2');


let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'node',
	port:3306
}; //

const con=mysql.createConnection(dbparams);

app.use(express.static("sf")) ;


app.get("/pinc",(req,resp)=>{
    let pinc=req.query.pin;
    console.log("pin obtained is : "+pinc);
let output={row:{},status:false};

con.query('select city from  data  where pincode=? ', [pinc],
    
(err, rows1) => {

    if (err) {
        console.log("error has occured let us see");  
    } else {
        if(rows1.length > 0)
        {
//         for(let i=0;i<data.length;i++){
//             console.log("pincode from data table is :"+data[i].city)
//         if(pinc == data[i].pincode){
            output.status =true;
//             console.log("city inside if block :"+data[i].city)
                    output.row=rows1[0];         
//             output.row=data[i];
//         }
//     }
// }
    }
}
        resp.send(output);
                                     


    
 } );
});

app.listen(300, function () {
    console.log("server listening at port 900...");
});