const express=require("express");
const app = express();

let details =[{acno:111,balance:5000},{acno:222,balance:5500},
    {acno:333,balance:6000},{acno:111,balance:6500},];


    app.use(express.static("sf")) ;

    app.get("/account",(req,resp)=>{
        let acno=req.query.acno;
        console.log("acno from box"+acno);
        let output={status :false ,balance:{}}
        for(let i=0;i<details.length;i++){
        if(acno==details[i].acno){
            output.status=true;
            output.balance=details[i];
        }
    }
       resp.send(output);

    });
    app.listen(900, function () {
        console.log("server listening at port 900...");
    });