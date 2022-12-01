window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("navbar")[0].style.padding = ".5em 0em";
  } 
//   else {
//     document.getElementsByClassName("navbar").style.padding = "80px 10px";
//   }
}