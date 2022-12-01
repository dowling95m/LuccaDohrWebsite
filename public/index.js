window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  var header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY >0)
  var nav_list = document.querySelector("header")
  nav_list.classList.toggle("sticky_nav", window.scrollY >0)


}