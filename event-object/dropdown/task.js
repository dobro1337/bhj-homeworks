let dropDown =  Array.from(document.querySelectorAll(".dropdown"));
dropDown.forEach((dropDownElement) =>{ //перебераем все dropDown.
    let childDropDown = Array.from(dropDownElement.children);//получаем дочерние элементы конкретного dropDown.
    let dropDownValue = null;
    let dropDownList = null;
    childDropDown.forEach((element) => {
        switch(element.className) {
            case "dropdown__value":{
                dropDownValue = element;
                break;
            }
            case "dropdown__list":{
                dropDownList = element;
                break;
            }
            default : 0;
        }
    })

    dropDownElement.onclick = function () {//записываем функцию вкл и выкл dropDown
        dropDownList.className = (dropDownList.className === "dropdown__list dropdown__list_active") ?  "dropdown__list" :  "dropdown__list dropdown__list_active";
    }
    let childDDList = Array.from(dropDownList.children);//получаем дочерние элементы dropDownList (тег li)
    childDDList.forEach((element) => {
        element.children[0].onclick = function () {//устанавливаем в функцию клика для тега a 
            dropDownValue.textContent = this.textContent;
            return false;
        }
    })
})


