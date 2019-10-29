const express=require('express');
const app=express();

app.get("/",function(res,req) {
    res.sendFile(__dirname+'/index.html');
});

var port=5000;
app.listen(port,function() {
    console.log("Server is listening at port "+ port);
});
