window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  var header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY >100)
  var nav_list = document.querySelector("nav")
  nav_list.classList.toggle("sticky_nav", window.scrollY >100)
  var content = document.querySelector("main")
  content.classList.toggle("sticky_content", window.scrollY >100)


}

var fullImgBox = document.getElementById("fullImgBox")
var fullImg = document.getElementById("fullImg")

function openFullImg(pic){
  fullImgBox.style.display = "flex"
  fullImg.src = pic
}

function closeFullImg(){
  fullImgBox.style.display = "none";
}

sketches = document.getElementsByClassName('sketch')

var screenWidth = window.innerWidth
var screenHeight = window.innerHeight

function generateRandomNumber(min, max) {
  return parseFloat(Math.floor(Math.random() * (max - min) + min).toFixed(2))

}

for(var i = 0; i < sketches.length; i++) {
  sketches[i].style.position = "absolute"
  sketches[i].style.bottom = (Math.random()*2-1) * (screenHeight/2) + "px"
  if(i%2 === 0){
    sketches[i].style.left = Math.random() * (screenWidth/4 ) + "px"
  }
  else{
    sketches[i].style.right = Math.random() * (screenWidth/4 ) + "px"
  }
 


}
































































// song hover shadow
var songData = []

fetch("./json_files/songs.json")
  .then((response) => response.json())
  .then((data) => songData = data)

var songs = document.querySelectorAll('.songs iframe')
// document.addEventListener('mouse')

for(var i = 0; i < songs.length; i++) {
  songs[i].addEventListener('mouseover', function(event) {
    var song = event.currentTarget
    console.log(song)
    var color = GetColorFromSong(song)
    song.style.boxShadow = `0px 6px 20px 1px ${color}`
    // song.style.color = color
  })
  songs[i].addEventListener('mouseleave', function(event) {
    var song = event.currentTarget
    song.style.boxShadow = "6px 6px 15px -1px rgba(0, 0, 0, 0.568)"
  })
}

function GetColorFromSong(song) {
  for(var i = 0; i < songData.length; i++) {
    console.log(songData[i].title + ' | ' + song.dataset.title)
    if(songData[i].title == song.dataset.title) {
      return songData[i].primary
    }
  }
}