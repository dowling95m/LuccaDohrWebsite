window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  var header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY >100)
  var nav_list = document.querySelector("nav")
  nav_list.classList.toggle("sticky_nav", window.scrollY >100)
  var content = document.querySelector("main")
  content.classList.toggle("sticky_content", window.scrollY >100)


}

var paintings = document.getElementsByClassName('painting')

for(var i = 0; i < paintings.length; i++){
  paintings[i].addEventListener('click', function photoGallery(Event){
    console.log("painting ", i, " was clicked!!")
    console.log("event.currenttarget: ", Event.currentTarget)
    console.log("the length of the paintings array is", paintings.length)
  })

}
