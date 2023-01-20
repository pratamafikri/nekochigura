window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("myNavbar").classList.add("header-black");
    document.getElementById("myNavbar").classList.remove("header-transparent");
} else {
    document.getElementById("myNavbar").classList.add("header-transparent");
    document.getElementById("myNavbar").classList.remove("header-black");
  }
}