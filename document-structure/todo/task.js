let input = document.getElementsByTagName("input")[0];
let taskList = document.getElementsByClassName("tasks__list")[0];
input.addEventListener('keydown', function(event) {
    if(event.code === "Enter"){
        event.preventDefault();
        if(input.value != ""){
            taskList.insertAdjacentHTML("beforeend",`<div class=task><div class=task__title>${input.value}</div><a href=# class=task__remove>&times;</a></div>`)
            let taskRemove = taskList.lastChild.lastChild;
            taskRemove.onclick = function () {
                taskRemove.parentElement.remove();
                return false;
            }
        }
    }
}
)