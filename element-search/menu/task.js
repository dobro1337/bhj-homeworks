let childrenMenuMain = Array.from(document.getElementsByClassName("menu menu_main")[0].children); //получаем все дочерние элементы класса menu menu_main

for(let i =0; i<childrenMenuMain.length; i++) {
    if(i === 0 || i === childrenMenuMain.length - 1){ // обращаемся ко всем элементам кроме 1 и последнего, т.к они ссылаются на внешний источник
        continue;
    }
    let menuLink = childrenMenuMain[i].children[0]; // 0 элемент тег a (на него нажимаем)
    let menuSub = childrenMenuMain[i].children[1];// 1 элемент список 
    menuLink.onclick = function () {
        menuSub.className = (menuSub.className === "menu menu_sub") ? "menu menu_sub menu_active" : "menu menu_sub";
        return false;
    }
}