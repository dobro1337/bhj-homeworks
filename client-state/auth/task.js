let form = document.forms[0];
let welcome = document.getElementsByClassName("welcome")[0];
let id = getCookie("id");

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const invocation = new XMLHttpRequest();
    const url = 'https://students.netoservices.ru/nestjs-backend/auth';

    if (invocation) {
        let formData = new FormData(form);
        invocation.open("POST", url, true);
        invocation.onreadystatechange = function () {
            if (invocation.status === 201 && invocation.readyState === XMLHttpRequest.DONE) {
                let ansver = JSON.parse(invocation.responseText);
                if(ansver["success"]){
                    welcome.innerHTML = `Добро пожаловать, пользователь #<span id=user_id>${ansver["user_id"]}</span>`;
                    welcome.classList.add("welcome_active");
                    document.cookie ='id=' + ansver["user_id"];
                }
                else {
                    alert("Неверный логин/пароль");
                }
            }
        }
        invocation.send(formData);
    }
})

if(id) {
    welcome.innerHTML = `Добро пожаловать, пользователь #<span id=user_id>${id}</span>`;
    welcome.classList.add("welcome_active");
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
