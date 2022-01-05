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

// post http verb reques
app.post('/hello', (req, res)=>{
    console.log("Back-end coding here please");
    res.send("Hello coding lovers");
})
// database to use params and parameter variables
let greetings = {
    en: "hello",
    fr: "bonjour",
    nep: "k cha"
}
// variables in url parameters, use params object
app.get('/greet/:language', (req, res)=>{
    // console.log(req.params);  // returns what is passed as url parameters
    const lang = req.params.language;  // requires.params.variableName
    const greeting = greetings[lang];
    res.send(greeting);
})

// req.query string in query string parameters in url
app.get('/search', (req, res) => {
    // destructuring of object
    // const {term, sort} = req.query;
    // if you need a default  value, do the following
    const {term = "pig", sort = "fatty meat"} = req.query;
    return res.send(`Term is ${term}, and sort is ${sort}`);
})

// request.headers
app.get('/show-me-headers', (req, res) => {
    console.log(req.headers);
    console.log(req.rawHeaders);

    res.send(req.headers);
})


// route handler
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
    console.log("BACK END NODE CODING!!!");
})