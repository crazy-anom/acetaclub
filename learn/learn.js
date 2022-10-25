window.addEventListener('scroll', ()=>{
    const header = document.querySelector("header")
    header.classList.toggle('scrolled' , window.scrollY >0)
})
//nav
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-bar")
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