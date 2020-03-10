class Cart{
    constructor(catalogCounter, containerCart, catalogProduct){
        this.catalogCounter = document.querySelector(catalogCounter);
        this.containerCart = document.querySelector(containerCart);
        this.catalogProduct = catalogProduct;
        this.create();
    }

    create(){
            this.catalogCounter.addEventListener('click', function(){
            cart.containerCart.style.display = 'block';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');
            let products = cardStore.getProduct();
            let basketSumma;

            for( let i = 0; i < productsCart.length; i++){

                let item = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'item'
                });
                let name = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'name',
                    textName: productsCart[i].name + '<br>' + productsCart[i].model  //Обращение уже к полученному массиву товаров
                });
                let price = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'price',
                    textName: productsCart[i].price.toLocaleString() + " " + "BYN"//Обращение уже к полученному массиву товаров
                });
                let img = createOneProduct.getProductItem({
                    tagName: "div",
                    className: "img",
                    backgroundImg: `url(${productsCart[i].img})`   //nazvanie svoistva =
                })
                let btnBasket = createOneProduct.getProductItem({
                    tagName: "div",
                    className: "btnBasket"
                })
                let btnMinus = createOneProduct.getProductItem({
                    tagName: "button",
                    className: "btnMinus",
                    textName: "-"
                })
                let btnCount = createOneProduct.getProductItem({
                    tagName: "div",
                    className: "btnCount",
                    textName: 1
                })
                let btnPlus = createOneProduct.getProductItem({
                    tagName: "button",
                    className: "btnPlus",
                    textName: "+"
                })
                let priceTotal = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'price priceTotal',
                    textName: "Итоговая сумма" + '<br>' + productsCart[i].price.toLocaleString() + " " + "BYN"//Обращение уже к полученному массиву товаров
                });
                let deleteItemIcon = createOneProduct.getProductItem({
                    tagName: "i",
                    className: "deleteItemIcon fas fa-times-circle",
                    id: productsCart[i].id
                })

                let count = 1;
                let pticeRez = Number(productsCart[i].price);
                let summaPokupok = 0;
                for (let i = 0; i < productsCart.length; i++){
                  summaPokupok += Number(productsCart[i].price);
                }
                let firstPrice = summaPokupok.toLocaleString();
                basketSumma = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'basketSumma',
                    textName: summaPokupok.toLocaleString() + " " + "BYN"
                });
                  console.log(summaPokupok);
                btnPlus.addEventListener('click', function() {
                  count = count + 1;
                  btnCount.innerText = count;
                  priceTotal.innerHTML = "Итоговая сумма" + "<br>" + (pticeRez * count).toLocaleString() + " " + "BYN";
                //  for (let i = 0; i < productsCart.length; i++){
                    summaPokupok += productsCart[i].price;
                //  }
                  console.log(productsCart.length);
                  console.log(productsCart[i].price);
                  basketSumma.innerHTML = "Стоимость покупки составит:" + "<br>" + summaPokupok.toLocaleString() + " " + "BYN";
                });
                btnMinus.addEventListener('click', function () {
                  if (count == 1) {
                    btnCount.innerText = 1;
                    priceTotal.innerHTML = "Итоговая сумма" + "<br>" + productsCart[i].price.toLocaleString() + " " + "BYN";
                    basketSumma.innerHTML = "Стоимость покупки составит:" + "<br>" + firstPrice + " " + "BYN";
                  } else {
                    count = count - 1;
                    btnCount.innerText = count;
                    priceTotal.innerHTML = "Итоговая сумма" + "<br>" + (pticeRez * count).toLocaleString() + " " + "BYN";
                  //  for (let i = 0; i < productsCart.length; i++){
                      summaPokupok -= productsCart[i].price;
                  //  }
                    basketSumma.innerHTML = "Стоимость покупки составит:" + "<br>" + summaPokupok.toLocaleString() + " " + "BYN";
                  }
                });

                deleteItemIcon.addEventListener('click', function (){
                    let id = this.getAttribute('id');
                    let result = cardStore.putProduct(id);
                    item.remove();
                });

                item.appendChild(img);
                item.appendChild(name);
                item.appendChild(price);
                btnBasket.appendChild(btnMinus);
                btnBasket.appendChild(btnCount);
                btnBasket.appendChild(btnPlus);
                item.appendChild(btnBasket);
                item.appendChild(priceTotal);
                item.appendChild(deleteItemIcon);
                wrapper.appendChild(item);
            }

            let close = createOneProduct.getProductItem({
                tagName: 'i',
                className: 'close fas fa-times-circle'
            })

            close.addEventListener('click', function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = ' ';
            })


            cart.containerCart.appendChild(wrapper);
            cart.containerCart.appendChild(close);
            cart.containerCart.appendChild(basketSumma);
        });



    }

    getProductCart(){
        let products = cardStore.getProduct();
        let productsCart = [];
        for( let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }

}

let cart = new Cart('.basket', '.container_cart', catalogAllCar);
// let cart2 = new Cart('.izbrannoe', '.izbrannoeAll', catalogAllCar);
