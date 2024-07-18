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

    if (this.txt == "你好" || this.txt == "你") {
      this.el.innerHTML = '<span style="font-family:Noto Sans Traditional Chinese; font-weight:500" class="wrap">'+this.txt+'<span style="font-family:Unbounded">!</span>'+'</span>';
    } else {
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    }
  
  
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
function scrollFunction() {
  if (document.body.scrollTop > vhToPixels(100) || document.documentElement.scrollTop > vhToPixels(100)) {
    mybutton.style.display = "block";
    console.log("CHECK");
  } else {
    console.log("CHECKKKKKKK");
    mybutton.style.display = "none";
    console.log("CHECKKKKKKKKKKKKKKK");
  }
}

function vhToPixels (vh) {
    return Math.round(window.innerHeight / (100 / vh));
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onscroll = function(ev) {
  scrollFunction();
    if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
      mybutton.classList.add('shake');
      setTimeout(function(){
        mybutton.classList.remove('shake');
      }, 1000);
      console.log("you're at the bottom of the page");
  };
};

// slide animation on scroll
	var upDivs = document.getElementsByClassName('to-slide-up');

	window.addEventListener('scroll', animation);

	function animation (e){
    for(var i = 0; i < upDivs.length; i++){
      var upDivs_pos = upDivs[i].offsetTop;
		  var window_pos = window.pageYOffset;
		  if(window_pos > upDivs_pos-100) {
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

function onLinkClick() {
  document.getElementsById('works').scrollIntoView({behavior:'smooth'});
};

// hover effect for happy face
var image = document.getElementById("happyFace");

//Now, we need to add an Event Listener to listen when the image gets mouse over.
if (image != null) {
  image.addEventListener('mouseover', function(){
    image.src = "assets/icons/smilely.png";
  })
  image.addEventListener('mouseout', function(){
      image.src = "assets/icons/happy.png";
  })
}

// hover effect for arrow on home page
var arrow = document.getElementById("arrowIcon");
var stars = document.getElementById("arrowStars");

//Now, we need to add an Event Listener to listen when the image gets mouse over.
if (arrow != null) {
  arrow.addEventListener('mouseover', function(){
    stars.style.display = "block";
    stars.classList.add('rotate');

  })
  arrow.addEventListener('mouseout', function(){
    stars.style.display = "none";  
  })

  arrow.addEventListener('click', function(){
    window.scrollBy({
      top: window.innerHeight, 
      left: 0, 
      behavior: "smooth",
    });  
  })
}

// gradientHero = getElementById("homeHero");
document.addEventListener("mousemove", function(event) {moveGradient(event);});

function moveGradient(event) {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  
  mouseXpercentage = Math.round(event.clientX / windowWidth * 100);
  mouseYpercentage = Math.round(event.clientY / windowHeight * 100);

  mouseX2 = mouseXpercentage + 5;
  mouseY2 = mouseYpercentage + 5; 
  
  document.getElementsByClassName("radial-gradient")[0].style.background = "radial-gradient(at " + mouseXpercentage + "% " + mouseYpercentage + "%, " + "rgb(100, 127, 214)" + ", " + "#D7C1E2" + ")";

  // `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, rgb(100, 127, 214), #724993)`;
};