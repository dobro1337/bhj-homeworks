let closseButton = document.getElementsByClassName("modal__close")[0];
let bClose = Boolean(getCookie("close"));
if(!bClose) {
    closseButton.parentElement.parentElement.classList.add("modal_active");
    closseButton.onclick = () => {
        document.cookie ='close=true';
        closseButton.parentElement.parentElement.classList.remove("modal_active");
    }
}


function getCookie(name){
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
}

