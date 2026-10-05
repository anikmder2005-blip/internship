var typed = new Typed('#text',{
    strings:['Developer.', 'Designer.', 'Writer.'],
    typeSpeed:5,
    backSpeed:5,
    loop:true,
});


(function(){
  const root = document.querySelector('.hero_image');
  const slides = Array.from(root.querySelectorAll('.swiper_slide'));
  const dotsWrap = root.querySelector('.swiper_dots');
  const prevBtn = root.querySelector('.swiper_arrow.prev');
  const nextBtn = root.querySelector('.swiper_arrow.next');
  let index = 0, timer;
  const DURATION = 3500;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.querySelectorAll('.dot'));

  function goTo(i){
    slides[index].classList.remove('active');
    dots[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    restart();
  }
  function next(){ goTo(index + 1); }
  function prev(){ goTo(index - 1); }
  function restart(){ clearInterval(timer); timer = setInterval(next, DURATION); }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', restart);
  restart();
})();



let skillBtn = document.querySelector('.skill_btn');
let skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click',() =>{
    skillDet.classList.toggle('show_skills');
});

// sticky nav

let nav = document.querySelector('nav');

window.addEventListener('scroll', () =>{
    if(window.scrollY > 100){
        nav.classList.add('sticky_nav');
    }
    else{
        nav.classList.remove('sticky_nav');
    }
})

// TESTIMONIAL SWIPER SLIDER

var swiper = new Swiper('.testSwiper',{
    slidesPerView:1,
    loop:true,
    autoplay:true,
});

// FILTERS 

var mixer = mixitup('.portfolio_images');

// BLOGS SWIPER SLIDER

var swiper = new Swiper('.blogSwiper',{
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    // autoplay:true,
});