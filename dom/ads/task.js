let rotators = Array.from(document.querySelectorAll(".rotator"));

function setCase(){
    rotators.forEach((rotator) => {
        let childRotatorCase = Array.from(rotator.children);
        let element = childRotatorCase[0];
        element.style.color = element.dataset["color"];
        function setActive() {
            if(element.nextElementSibling){
                element.classList.remove("rotator__case_active");
                element = element.nextElementSibling;
                element.style.color = element.dataset["color"];
            }
            else {
                element.classList.remove("rotator__case_active");
                element = childRotatorCase[0];
                element.style.color = element.dataset["color"];
            }
            element.classList.add("rotator__case_active")
            setTimeout(setActive,element.dataset["speed"]);
        }
        setActive();
    })
}

setCase();