var path = require('path');
var express = require('express');
var exhbs = require('express-handlebars')

var app = express();
var port = process.env.PORT || 3000;

var songs = require("./json_files/songs.json")
var photos = require("./json_files/photos.json")
var paintings = require("./json_files/paintings.json")

app.engine('handlebars', exhbs.engine({
  defaultLayout: "main"
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.status(200).render('lucca_dohr')
})

app.get('/about', function(req, res, next) {
  res.status(200).render('about', {
    photos: photos
  })
})

app.get('/paintings', function(req, res, next) {
  res.status(200).render('paintings', {paintings})
})

app.get('*', function(req, res, next){
    res.status(404).render('404')
})


app.listen(port, function () {
    console.log("== Server is listening on port", port);
});