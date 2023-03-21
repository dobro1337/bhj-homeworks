let productQuantityValue = Array.from(document.getElementsByClassName("product__quantity-value"));
let productAdd = Array.from(document.getElementsByClassName("product__add"));
let cartProducts = Array.from(document.getElementsByClassName("cart__products"))[0];
productQuantityValue.forEach(element => {
    let dec = element.previousSibling.previousSibling;
    let inc = element.nextSibling.nextSibling;
    dec.onclick = function() {
        if(element.textContent > 1){
            element.textContent--;
        }
    }
    inc.onclick = function() {
        element.textContent++;
    }

})

productAdd.forEach(element => {
    element.onclick = function () {
        let products = Array.from(document.getElementsByClassName("cart__products")[0].children);//товар в корзине
        let parrent = element.closest(".product")
        let img = parrent.getElementsByTagName("img")[0];
        let value = Number(parrent.querySelector(".product__quantity-value").textContent)

        let index = products.findIndex(product => {
            return product.getAttribute("data-id") === parrent.getAttribute("data-id");
        })
        if(index > -1) {
            products[index].querySelector(".cart__product-count").textContent = value + Number(products[index].querySelector(".cart__product-count").textContent);
            move(parrent.children[1],products[index]);
        }
        else {
            cartProducts.insertAdjacentHTML("beforeend",`<div class=cart__product data-id=${parrent.getAttribute("data-id")}><img class=cart__product-image src=${img.getAttribute("src")}><div class=cart__product-count>${value}</div></div>`)
        }
    }
})

function move(picture,cart) {
    let picturePos = picture.getBoundingClientRect();
    let cartPos = cart.getBoundingClientRect();
    let picture2 = picture.cloneNode();// копируем картинку
  
    picture2.style.position="absolute";// задаем позицию
    picture2.style.left=picturePos.x+"px";
    picture2.style.top=picturePos.y+"px";

    let distanceX = (cartPos.x)-picturePos.x;// дистанция между картинкой и корзиной
    let distanceY = (cartPos.y)-picturePos.y;

    document.body.appendChild(picture2); //
    picture2.clientWidth;// обращаемся к геттеру , чтобы стили применились
    picture2.style.transform+="translateX("+distanceX+"px)";
    picture2.style.transform+="translateY("+distanceY+"px)";
    picture2.style.transition="1s"; // переходное состояние между 2 состояниями элемента 
  
    setTimeout(()=>document.body.removeChild(picture2),650);// удаляем созданную фотографию
  }