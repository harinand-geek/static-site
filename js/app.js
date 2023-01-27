
//  JavaScript - Menu nav Bar 
    var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-200px";
    }
// Back to top
window.addEventListener('scroll' , function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active" , window.scrollY > 500)
})


function scrollToTop(){
    window.scrollTo({
        top : 0,
        behavior:'smooth'
    })
}