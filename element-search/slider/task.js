let sliderArrowPrev = Array.from(document.getElementsByClassName("slider__arrow slider__arrow_prev"))[0];//<-
let sliderArrowNext = Array.from(document.getElementsByClassName("slider__arrow slider__arrow_next"))[0];//->
let sliderDots = Array.from(document.getElementsByClassName("slider__dots")[0].children);// получаем точки.
let sliderItems = Array.from(document.getElementsByClassName("slider__items")[0].children); //изображения


function changeImg(newNumberImg)  {
    if( newNumberImg < 0){
        newNumberImg = sliderItems.length-1;
    }
    else if(newNumberImg >= sliderItems.length){
        newNumberImg = 0;
    }
    let currentNumberImg = sliderItems.findIndex((element)=>{ return element.className === "slider__item slider__item_active"}) //позиция текущего изображения 
    sliderItems[currentNumberImg].className = "slider__item";
    sliderItems[newNumberImg].className = "slider__item slider__item_active";
    sliderDots[currentNumberImg].className = "slider__dot";
    sliderDots[newNumberImg].className = "slider__dot slider__dot_active";
    currentNumberImg = newNumberImg;
}

sliderArrowNext.onclick = function () {
    let currentNumberImg = sliderItems.findIndex(element=> { return element.className === "slider__item slider__item_active"})
    changeImg(currentNumberImg + 1);
}

sliderArrowPrev.onclick = function () {
    let currentNumberImg = sliderItems.findIndex((element)=>{return element.className === "slider__item slider__item_active"})
    changeImg(currentNumberImg - 1);
}

sliderDots.forEach((e) => {
    e.onclick = function (even) {
        let index = sliderDots.indexOf(even.target);
        changeImg(index);
    }
})