let isInViewport=function(){
let elementS = document.querySelectorAll(".reveal")
const viewportHeight=window.innerHeight;
elementS.forEach(e => {
    const elementTop=e.getBoundingClientRect().top;
    const elementBottom=e.getBoundingClientRect().bottom;

    if((elementTop<viewportHeight ? true : false) && (elementBottom > 0 ? true : false)){
        e.classList.add("reveal_active");
    }
    else {
        e.classList.remove("reveal_active");
    }
})
}
document.addEventListener("scroll",isInViewport);