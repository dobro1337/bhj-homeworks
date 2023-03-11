let interestActive = Array.from(document.querySelectorAll(".interests_active"));

interestActive.forEach(element => {
    let parrentCheckBox = element.previousElementSibling.children[0]; //interest__check
    let childrenCheckBox = Array.from(element.children);//interest
    childrenCheckBox.forEach(children=> {
        children.addEventListener("change",(event)=> {
            if(event.target.checked) {
                if(childrenCheckBox.every(e => {return e.children[0].children[0].checked})){
                    parrentCheckBox.checked = event.target.checked;
                }
            }
            else {
                parrentCheckBox.checked = event.target.checked;
            }
        })
    })
    parrentCheckBox.addEventListener("change",(event) => {
        let childCheckBox = Array.from(element.querySelectorAll(".interest__check"));//все чекбоксы под interests_active
        childCheckBox.forEach(e => {e.checked = event.target.checked})
    }) 
})