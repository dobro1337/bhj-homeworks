let sliderArrowPrev = Array.from(document.getElementsByClassName("slider__arrow slider__arrow_prev"))[0];//<-
let sliderArrowNext = Array.from(document.getElementsByClassName("slider__arrow slider__arrow_next"))[0];//->
let sliderDots = Array.from(document.getElementsByClassName("slider__dots")[0].children);// получаем точки.
let sliderItems = Array.from(document.getElementsByClassName("slider__items")[0].children); //изображения
let currentNumberImg = 0;

function changeImg(newNumberImg)  {
    if( newNumberImg < 0){
        newNumberImg = sliderItems.length-1;
    }
    else if(newNumberImg >= sliderItems.length){
        newNumberImg = 0;
    }
    sliderItems[currentNumberImg].className = "slider__item";
    sliderItems[newNumberImg].className = "slider__item slider__item_active";
    sliderDots[currentNumberImg].className = "slider__dot";
    sliderDots[newNumberImg].className = "slider__dot slider__dot_active";
    currentNumberImg = newNumberImg;
}

sliderArrowNext.onclick = function () {
    changeImg(currentNumberImg + 1);
}

sliderArrowPrev.onclick = function () {
    changeImg(currentNumberImg - 1);
}

sliderDots.forEach((e) => {
    e.onclick = function (even) {
        let index = 0;
        for(let i = 0; i< sliderDots.length; i++) {
            if(even.target === sliderDots[i]){
                index = i;
            }
        }
        changeImg(index);
    }
})