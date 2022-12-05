var path = require('path');
var express = require('express');
var exhbs = require('express-handlebars')

var app = express();
var port = process.env.PORT || 3000;

var songsData = require("./json_files/songs.json")
var photosData = require("./json_files/photos.json")
var paintingsData = require("./json_files/paintings.json")
var videosData = require('./json_files/musicvids.json')

var sketchesData = require('./json_files/sketches.json')
var midPoint = Math.ceil(sketchesData.length / 2)
var leftSketches = sketchesData.slice(0, midPoint)
var rightSketches = sketchesData.slice(midPoint) 

app.engine('handlebars', exhbs.engine({
  defaultLayout: "main"
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.status(200).render('lucca_dohr', {
      songs: songsData,
      leftSketches: leftSketches,
      rightSketches: rightSketches
    })
})

app.get('/about', function(req, res, next) {
  res.status(200).render('about', {
    photos: photosData
  })
})

app.get('/paintings', function(req, res, next) {
  res.status(200).render('paintings', {
    paintings: paintingsData
  })
})

app.get('/videos', function(req, res, next) {
  res.status(200).render('videos', {
    videos: videosData
  })
})

app.get('*', function(req, res, next){
    res.status(404).render('404')
})


app.listen(port, function () {
    console.log("== Server is listening on port", port);
});