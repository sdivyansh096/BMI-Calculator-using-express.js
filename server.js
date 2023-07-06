const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);
    var bmi = num1/(num2*num2);
    res.send("Your BMI is "+bmi);
});
app.listen(3000,function(){
    console.log("Server is running on port 3000.")
});