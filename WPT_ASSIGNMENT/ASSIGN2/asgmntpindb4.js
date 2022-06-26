const express=require("express");
const app = express();

let data =[{city:"pune",pincode:111},
    {city:"mumbai",pincode:222},
    {city:"delhi",pincode:333},
    {city:"jaipur",pincode:444}]


app.use(express.static("sf")) ;


app.get("/pinc",(req,resp)=>{
    let pinc=req.query.pin;
    console.log("pin obtained is : "+pinc);
let output={row:{},status:false};
for(let i=0;i<data.length;i++){
    console.log("pincode from data table is :"+data[i].city)
if(pinc == data[i].pincode){
    output.status =true;
    console.log("city inside if block :"+data[i].city)
   
    output.row=data[i];
    console.log("---------- :"+output.row.city)

}

}
resp.send(output);
});

app.listen(900, function () {
    console.log("server listening at port 900...");
});