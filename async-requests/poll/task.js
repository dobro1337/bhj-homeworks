let xhr = new XMLHttpRequest();
let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE) {
        let object = JSON.parse(xhr.responseText);
        let buttons = [];
        pollTitle.innerHTML = `<h2>${object.data.title}</h2>`;
        object.data.answers.forEach(element => {
            pollAnswers.insertAdjacentHTML("beforeend",`<button class="poll__answer">${element}</button>`)
        });
        buttons = Array.from(document.getElementsByClassName("poll__answer"));
        console.log(object);
        buttons.forEach(element => {
            element.style["margin-left"] = 10 + "px";
            element.onclick = function () {
                alert("Спасибо, ваш голос засчитан!");

                let currentElement = -1;//показ результатов голосования
                buttons.forEach((e,index) => {
                    if(e === element){
                        currentElement = index;
                    }
                })
                let xhr = new XMLHttpRequest();
                xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr.send( `vote=${object.id}&answer=${currentElement}` );
                xhr.addEventListener("readystatechange",() => {
                    if(xhr.readyState === xhr.DONE) { 
                        let stat = JSON.parse(xhr.responseText);
                        let arrStat = stat.stat;
                        pollAnswers.innerHTML = "";
                        arrStat.forEach(e => {
                            pollAnswers.insertAdjacentHTML("beforeend",`<div style = display:flex> ${e.answer}: <h4 style = margin:0> ${e.votes} </h4> % </div>`);
                        })
                        console.log(xhr.responseText);
                    }
                })
            }
        })
    }
})

xhr.open("GET","https://students.netoservices.ru/nestjs-backend/poll",true);
xhr.send();