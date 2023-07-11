// TYPING ANIMATION
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

// SCROLL BACK TO TOP BUTTON
// Get the button:
let mybutton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function vhToPixels (vh) {
    return Math.round(window.innerHeight / (100 / vh));
}

function scrollFunction() {
  if (document.body.scrollTop > vhToPixels(100) || document.documentElement.scrollTop > vhToPixels(100)) {
    mybutton.style.display = "block";
    setTimeout(function(){
      mybutton.style.animationPlayState = "paused";
    }, 1500);
  } else {
    mybutton.style.display = "none";
    mybutton.style.animationPlayState = "running";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// slide animation on scroll
	var upDivs = document.getElementsByClassName('to-slide-up');

	window.addEventListener('scroll', animation);

	function animation (e){
    for(var i = 0; i < upDivs.length; i++){
      var upDivs_pos = upDivs[i].offsetTop;
		  var window_pos = window.pageYOffset;
		  if(window_pos > upDivs_pos-500) {
			  upDivs[i].classList.add('fade-in');
		  }
    }
  }

// mark animation on scroll
(function (window, document) {
  const markers = document.querySelectorAll('mark');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.8
  });
  
  markers.forEach(mark => {
    observer.observe(mark);
  });
})(window, document);

//dropdown button in nav bar
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// hover effect for happy face
var image = document.getElementById("happyFace");

//Now, we need to add an Event Listener to listen when the image gets mouse over.
if (image != null) {
  image.addEventListener('mouseover', function(){
    image.src = "assets/smilely.png";
  })
  image.addEventListener('mouseout', function(){
      image.src = "assets/happy.png";
  })
}