// import express
const express = require("express"); 
//instantiate express
const app = express();

/*

//define a route
app.get('/dogs', () => {
    console.log("You asked for dog");
})

// route handler
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})
*/

//define a route
app.get('/dogs', (req, res) => {
    console.log("You asked for dog");
    // console.log(req);
    // console.log(res);
    // repond with some message
    res.send("I am a dog and WOFF WOOF");
})

// route handler
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})