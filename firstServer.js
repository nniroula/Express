const express = require("express");

const app = express();

// app.listen() should go at the end of the file
app.listen(3000, function(){
    console.log("App running in port 3000");
});

// Go to terminal and run node firstServer.js
// in browser do, localhost:3000 --> you will get error at this time as no routes defined yet
