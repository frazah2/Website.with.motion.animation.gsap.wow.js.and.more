$(document).ready(function() {
    var navbar = $('.navbar');
    var lastScrollTop = 0; // Keeps track of the last scroll position
    
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var navbarHeight = navbar.height();
      var smallLogoHeight = $('.small-logo').height();
      var bigLogoHeight = $('.big-logo').height();
      
      var smallLogoEndPos = 0;
      var smallSpeed = (smallLogoHeight / bigLogoHeight);
      var ySmall = (scrollTop * smallSpeed); 
      var smallPadding = navbarHeight - ySmall;
      
      if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
      if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
      if (smallPadding < 0) { smallPadding = 0; }
      
      $('.small-logo-container').css({ "padding-top": smallPadding });
      
      var navOpacity = ySmall / smallLogoHeight; 
      if (navOpacity > 1) { navOpacity = 1; }
      if (navOpacity < 0) { navOpacity = 0; }
      
      var gradientTop = 'linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)';
      var gradientDown = 'linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)';
      
      // Change navbar background image based on scroll position
      if (scrollTop <= 0) {
        // Scrolling to the top
        navbar.css({
          "background-image": gradientTop
        });
      } else {
        // Scrolling down
        navbar.css({
          "background-image": gradientDown
        });
      }
      
      // Optional: Add shadow for better visibility
      var shadowOpacity = navOpacity * 0.4;
      if (scrollTop > 1) {
        navbar.css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
      } else {
        navbar.css({"box-shadow": "none"});
      }
      
      lastScrollTop = scrollTop;
    });
  });
  
  
  // Initialize elements and event listeners
  var $cont = document.querySelector('.cont');
  var $elsArr = [].slice.call(document.querySelectorAll('.el'));
  var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
  
  setTimeout(function() {
    $cont.classList.remove('s--inactive');
  }, 200);
  
  $elsArr.forEach(function($el) {
    $el.addEventListener('click', function() {
      if (this.classList.contains('s--active')) return;
      $cont.classList.add('s--el-active');
      this.classList.add('s--active');
    });
  });
  
  $closeBtnsArr.forEach(function($btn) {
    $btn.addEventListener('click', function(e) {
      e.stopPropagation();
      $cont.classList.remove('s--el-active');
      document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });
  // Initialize WOW.js
new WOW().init();

// Initialize GSAP Animations
gsap.from('.about-title', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.about-description', { opacity: 0, y: 50, duration: 1, delay: 1 });

gsap.from('.team-member', {
  opacity: 0,
  stagger: 0.3,
  duration: 0.5,
  ease: 'power3.out'
});

// Initialize Tilt.js
$(document).ready(function(){
  $('.team-member').tilt({
    maxTilt: 25,
    speed: 400
  });
});
document.addEventListener("DOMContentLoaded", function() {
    const objects = document.querySelectorAll('.floating-objects .object');
    const container = document.querySelector('.about-section');
  
    objects.forEach(obj => {
      // Random initial positions
      const x = Math.random() * 100;
      const y = Math.random() * 100;
  
      obj.style.left = `${x}%`;
      obj.style.top = `${y}%`;
  
      // Random size for each object
      const size = 30 + Math.random() * 50; // Size between 30px and 80px
      obj.style.width = `${size}px`;
      obj.style.height = `${size}px`;
    });
  });
  gsap.utils.toArray('.floating-objects .object').forEach(obj => {
    gsap.fromTo(obj,
      { x: 0, y: 0 },
      {
        x: Math.random() * 100 - 50, // Random x position
        y: Math.random() * 100 - 50, // Random y position
        duration: 10 + Math.random() * 10, // Random duration between 10s and 20s
        repeat: -1, // Repeat infinitely
        yoyo: true, // Yoyo effect
        ease: "power1.inOut"
      }
    );
  });
    
    