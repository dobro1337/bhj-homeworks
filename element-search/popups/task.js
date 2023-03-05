let modalMain = document.getElementById("modal_main");
modalMain.className +=" modal_active";
let modalClose = Array.from(document.getElementsByClassName("modal__close modal__close_times"));

for(let i =0;i<modalClose.length;i++) {
    modalClose[i].onclick = function () {
        let parent = this.parentElement.parentElement;
        parent.className = "modal";
    }
}

let showSuccess = document.getElementsByClassName("show-success")[0];
showSuccess.onclick = function () {
    let modalSuccess = document.getElementById("modal_success");
    modalMain.className = "modal";
    modalSuccess.className +=" modal_active";
}