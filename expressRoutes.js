// import express
const express = require("express");

// import router.js file
const routerFile = require("./router");
//instantiate express
const app = express();


// for using parsing json  data in req.body
app.use(express.json());
// for parsing html form datat in req.body
app.use(express.urlencoded({extended: true}));


// user router.js file with app
app.use('/users', routerFile);
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

// req.body --> roughly for authentication and authorization
/* For this to work, add app.use(express.json()) --> for json data
    app.use(express.urlencoded({extended: true})) --> for html form data coming in as request
    These statements should go at the top to the js file below express instantiation
*/
app.post('/register', (req, res) => {
    // res.send(req.body);
    res.send(req.body.username);
})


// return with json response
const CANDIES = [
    {name: "snickers", qty: 3, price: 1.5},
    { name: "lolli pop", qty: 6, price: 2.0}
];
// route to display that candies databse
app.get('/candies', (req, res) => {
    res.json(   CANDIES);
})
// post request for the candies database
app.post('/candies', (req, res) => {
    // CANDIES.push(req.body);
    res.json(CANDIES);
})


// route handler
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
    console.log("BACK END NODE CODING!!!");
})