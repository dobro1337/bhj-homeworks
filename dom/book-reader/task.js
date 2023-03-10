let fontSize = document.querySelectorAll(".font-size");
let fontColor = Array.from(document.querySelector(".book__control_color").children);
let bkColor = Array.from(document.querySelector(".book__control_background").children);

fontSize.forEach(element => {element.onclick = function () {
    if(!element.classList.contains("font-size_active")){
        let parentBook = element.closest(".book");

        currentFontSize = document.querySelector(".font-size_active")
        currentFontSize.classList.remove("font-size_active");
        parentBook.classList.remove(`book_fs-${currentFontSize.dataset.size}`);
        element.classList.add("font-size_active");

        parentBook.classList.add('book',`book_fs-${element.dataset.size}`);
    }
    return false;
}})

fontColor.forEach(element => {
    if(element.classList.contains("color__title")){
        return;
    }
    element.onclick = function (){
    if(!element.classList.contains("color_active")) {
        let parentBook = element.closest(".book");

        currentColor = element.parentElement.querySelector(".color_active");
        currentColor.classList.remove("color_active");
        parentBook.classList.remove(`book_color-${currentColor.dataset.textColor}`)
        element.classList.add("color_active");
        
        parentBook.classList.add(`book_color-${element.dataset.textColor}`)
    }
    return false;
}})

bkColor.forEach(element => {
    if(element.classList.contains("color__title")){
        return;
    }
    element.onclick = function (){
    if(!element.classList.contains("color_active")) {
        let parentBook = element.closest(".book");

        currentColor = element.parentElement.querySelector(".color_active");
        currentColor.classList.remove("color_active");
        parentBook.classList.remove(`book_bg-${currentColor.dataset.bgColor}`)
        element.classList.add("color_active");
        
        parentBook.classList.add(`book_bg-${element.dataset.bgColor}`)
    }
    return false;
}})