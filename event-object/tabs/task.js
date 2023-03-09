let arrTabs = Array.from(document.querySelectorAll(".tabs"));

arrTabs.forEach(elementTabs => {
    let arrTab = Array.from(elementTabs.querySelectorAll(".tab"));
    let currentTabIndex = arrTab.findIndex(element => {return element.className === "tab tab_active"})
    let arrTabContent = Array.from(elementTabs.querySelectorAll(".tab__content"));
    arrTab.forEach((tab,index) => {
        function click() {
            arrTab[currentTabIndex].className = "tab";
            arrTabContent[currentTabIndex].className = "tab__content";
            tab.className = "tab tab_active";
            currentTabIndex = index;
            arrTabContent[index].className = "tab__content tab__content_active";
        }
        tab.addEventListener("click",click);
    })
})