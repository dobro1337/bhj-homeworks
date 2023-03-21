let loader = document.getElementById("loader");
let items = document.getElementById("items");
let xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange",() =>{
    if(xhr.readyState === xhr.DONE) {
        let element = JSON.parse(xhr.responseText) 
        loader.classList.remove("loader_active");
        for (const [key, value] of Object.entries(element.response.Valute)) {
        items.insertAdjacentHTML("beforeend",`<div class="item"><div class=item__code>${key}</div><div class=item__value>${value.Value}</div><div class=item__currency>руб.</div></div>`)
        }
    }
})

xhr.open("GET","https://students.netoservices.ru/nestjs-backend/slow-get-courses",true);
xhr.send();