const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-bar")
const body = document.querySelector("body")
const home = document.querySelector(".section-one")

window.addEventListener('scroll', ()=>{
    const header = document.querySelector("header")
    header.classList.toggle('scrolled' , window.scrollY >0)
})

menu.addEventListener('click',menufunction);

function menufunction(){
    nav.classList.toggle('active');
    gsap.from('.nav-bar.active .menu-item li',{
        x: 200,
        duration:.5,
        opacity:0,
        stagger: 0.1
    })
}

var tl = anime.timeline({
    targets: '.blow',
    duration: 1000, // Can be inherited
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });

tl.add({
    translateY:"3px",
}).add({
    translateY:"-3px",
})

