// Get that hamburger menu cookin' //

window.addEventListener('touchstart', function() {
  playMp3();
  pageTouched = true;
});

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  pageScroll();

  // play();
  
});
var audioPlayed = false;
const audio = new Audio('image/AlRum_30_21.mp3');
function playMp3() {
  if (audioPlayed == false) {
    audio.play();
    audioPlayed = true;
  }
}
function play() {
  if (audioPlayed == false) {
    audio.play();
    audioPlayed = true;
  }
}
var pageTouched = false;

function pageScroll() {
if(window.scrollY > 650 || pageTouched)
return;

  window.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,15);
}

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});
