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




// function dont_place(){
//   for (var i = 5; i < sketches.length; i++){
//     sketches[i].style.display = "none"
//   }
// }
// dont_place()
function place_sketches(){

  sketches[0].style.bottom = "45vh";
  sketches[0].style.left = "2vw";

  sketches[1].style.bottom = "10vh";
  sketches[1].style.left = "10vw";

  sketches[2].style.bottom = "0vh";
  sketches[2].style.left = "5vw";

  sketches[3].style.bottom = "25vh";
  sketches[3].style.left = "20vw";

  sketches[4].style.bottom = "-15vh";
  sketches[4].style.left = "20vw";


  sketches[5].style.bottom = "40vh";
  sketches[5].style.left = "85vw";

  sketches[6].style.bottom = "30vh";
  sketches[6].style.left = "75vw";

  sketches[7].style.bottom = "-15vh";
  sketches[7].style.left = "70vw";

  sketches[8].style.bottom = "0vh";
  sketches[8].style.left = "85vw";

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

place_sketches()
