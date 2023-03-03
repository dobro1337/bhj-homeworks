let element = document.getElementById("cookie");
let countClick = document.getElementById("clicker__counter");
let date1 = 0;
let date2 = 0;
element.onclick = function () {
    countClick.textContent++;
    if(Number(countClick.textContent) % 2 !== 0){
        element.width *= 1.1;
        element.height *= 1.1;
        date1 = new Date();
    }
    else {
        element.width /= 1.1;
        element.height /= 1.1;
        date2 = new Date()
    }
    document.getElementById("clicker__in_second").textContent = Math.abs(1/((date2-date1)/1000)).toFixed(2);
}