let deadMole = document.getElementById("dead");
let miss = document.getElementById("lost");
function setOnClick() {
    for(let i = 1;i<10;i++) {
        let element = document.getElementById(`hole${i}`);
        element.onclick = function () {
            if(this.className === "hole hole_has-mole"){
                deadMole.textContent++;
                if(Number(deadMole.textContent) === 10){
                    deadMole.textContent = 0;
                    miss.textContent = 0;
                    alert("Ура победа!")
                }
            }
            else {
                miss.textContent++;
                if(Number(miss.textContent) === 5){
                    deadMole.textContent = 0;
                    miss.textContent = 0;
                    alert("Вы проиграли")
                }
            }
        }
    }
}
setOnClick();