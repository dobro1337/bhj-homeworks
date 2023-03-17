let hasTooltips = Array.from(document.getElementsByClassName("has-tooltip"));

hasTooltips.forEach(element => {
    element.insertAdjacentHTML("afterEnd",`<div class=tooltip>${element.title}</div>`)
    element.onclick = function () {
        let div = element.nextSibling;
        let currentActive = document.getElementsByClassName("tooltip_active")[0];
        let rect = element.getBoundingClientRect();
        div.style.position = "absolute";
        div.style.left = (rect.x)+'px';
        div.style.top = (rect.y + 20)+'px';
        if(div === currentActive){
            div.classList.remove("tooltip_active");
        }
        else{
            if(currentActive){
                currentActive.classList.remove("tooltip_active");
            }
            div.classList.add("tooltip_active");
        }
        return false;
    }
})
