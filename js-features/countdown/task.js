/*let element = document.getElementById("timer");
let time = Number(element.textContent);

function decTime() {
    time -=1;
    element.textContent = time;
    if(time === 0)
    {
        alert("Вы победили в конкурсе!");
        clearInterval(idInterval);
    }
}

let idInterval = setInterval(decTime,1000);*/


let element = document.getElementById("timer");
let time = "00:00:10"; 
element.textContent = time; 
let hours = Number(time.slice(0,2));
let minutes = Number(time.slice(3,5));
let seconds = Number(time.slice(6,8));
function decTime() {
    if(hours === 0 && minutes === 0 && seconds === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(idInterval);
        
    }
    else {
        if(seconds > 0){
            seconds -=1;
            time = `${(hours>=10) ? String(hours):"0"+String(hours)}:${(minutes>=10) ? String(minutes):"0"+String(minutes)}:${(seconds>=10) ? String(seconds):"0"+String(seconds)}`;
        }
        else{
            if(minutes > 0){
                minutes -=1;
                seconds = 59;
                time = `${(hours>=10) ? String(hours):"0"+String(hours)}:${(minutes>=10) ? String(minutes):"0"+String(minutes)}:${(seconds>=10) ? String(seconds):"0"+String(seconds)}`;
            }
            else {
                hours -=1;
                minutes = 59;
                time = `${(hours>=10) ? String(hours):"0"+String(hours)}:${(minutes>=10) ? String(minutes):"0"+String(minutes)}:${(seconds>=10) ? String(seconds):"0"+String(seconds)}`;
            }
        }
    }
    

    element.textContent = time;
}
let idInterval = setInterval(decTime,1000);


