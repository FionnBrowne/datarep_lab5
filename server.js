const express = require('express')//express needs to be installed first
const path = require('path');//determines what directeory were in through path in express
const app = express()
const port = 3000//create a web server at 3000
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {//once listen picks up at 3000 the home page, get puts out code
    res.send('Welcome to Data Representation & Querying!')
})

//app refers to express
//changin url
app.get('/hello/:name', (req, res) => {//if name matches with get  through request it will output the info
    console.log(req.params.name);//should log to console by name
    res.send('Hello ' + req.params.name);

})

app.get('/api/movies', (req, res) => {
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"

        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    res.json({ movies: mymovies });//passed on from server to client

});

app.get('/test', (req, res) => {//auto translates it into html rather then json
    res.sendFile(__dirname + '/index.html');

})

app.get('/name', (req, res) => {//GET carries request parameter appended in URL string
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);//passing back first and last name to user
})

app.post('/name', (req, res) => {//POST carries request parameter in message body
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);//body because its not from the url anymore its from the body

})

app.listen(port, () => {//listens to web server at 3000 // any changes the server has to be restarted
    console.log(`Example app listening at http://localhost:${port}`)
})