// get height of the div above the photo

// photo 1
var offsetHeight = document.getElementById('title').offsetHeight;
// photo 2

// image animation, move to left and resize
$(window).on('scroll',function (){
    var wScroll = $(this).scrollTop();
    //limit slide only 250 px
    var px_limit = 250
    if((wScroll > offsetHeight)) {
      var Scrollval = wScroll - offsetHeight;
      if ((Scrollval > 0) && (Scrollval < px_limit)) {
        // $('.scroll-img').css('top',Scrollval + 'px');
        $('.scroll-img').css('right', Scrollval + 'px');
        $('.img-photo').css('width', (67-7*((Scrollval/px_limit))) + '%');
        $('.img-photo').css('width', (67-7*((Scrollval/px_limit))) + '%');
      }
    }
  })



// photo fade-in animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// window height


const windowHeight = document.getElementById("window-height");

const getWindowHeight = () => {
  windowHeight.innerHTML =
    window.innerHeight || document.documentElement.clientHeight;
};

const offsetTop = document.getElementById("offset-top");

getWindowHeight();

window.addEventListener('resize', () => {
  getWindowHeight()
})