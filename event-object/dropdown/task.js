let dropDown =  Array.from(document.querySelectorAll(".dropdown"));
dropDown.forEach((dropDownElement) =>{ //перебераем все dropDown.
    let dropDownValue = dropDownElement.querySelectorAll(".dropdown__value")[0];
    let dropDownList = dropDownElement.querySelectorAll(".dropdown__list")[0];
    let dropDownLink = Array.from(dropDownList.querySelectorAll(".dropdown__link"));
    
    dropDownElement.onclick = function () {//записываем функцию вкл и выкл dropDown
        dropDownList.className = (dropDownList.className === "dropdown__list dropdown__list_active") ?  "dropdown__list" :  "dropdown__list dropdown__list_active";
    }

    dropDownLink.forEach((element) => {
        element.onclick = function () {
            dropDownValue.textContent = this.textContent;
            return false;
        }
    })
})


