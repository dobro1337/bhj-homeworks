let textArea = document.getElementsByTagName("textarea")[0];
let text = localStorage.getItem("text");
let form = document.getElementsByTagName("form")[0];

textArea.addEventListener("input",(event) => {
    localStorage.setItem("text",event.target.value);
})
form.addEventListener("reset",() => {
    delete localStorage.text;
})
if(text) {
    textArea.value = text;
}