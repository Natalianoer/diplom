class Izbrannoe{
    constructor(catalogCounter, containerCart, catalogProduct){
        this.catalogCounter = document.querySelector(catalogCounter);
        this.containerCart = document.querySelector(containerCart);
        this.catalogProduct = catalogProduct;
        this.create();
    }

    create(){
            this.catalogCounter.addEventListener('click', function(){
            izbrannoe.containerCart.classList.toggle('activeIzbrannoe');
            let productsCart = izbrannoe.getProductCart();
            let wrapper = document.createElement('slot');
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
                    tagName: 'i',
                    className: 'fas fa-times-circle deleteItemIcon'
                });

                let count = 1;
                let pticeRez = Number(productsCart[i].price);
                let summaPokupok = 0;
                for (let i = 0; i < productsCart.length; i++){
                  summaPokupok += Number(productsCart[i].price);
                }
                basketSumma = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'basketSumma',
                    textName: summaPokupok.toLocaleString() + " " + "BYN"
                });
                summaPokupok = 0;
                btnPlus.addEventListener('click', () => {
                  count = count + 1;
                  btnCount.innerText = count;
                  priceTotal.innerHTML = "Итоговая сумма" + "<br>" + (pticeRez * count).toLocaleString() + " " + "BYN";
                  for (let i = 0; i < productsCart.length; i++){
                    summaPokupok += productsCart[i].price;;
                  }
                  basketSumma.innerHTML = "Стоимость покупки составит:" + "<br>" + summaPokupok.toLocaleString() + " " + "BYN";
                });
                btnMinus.addEventListener('click', () => {
                  if (count <= 1) {
                    btnCount.innerText = 1;
                    priceTotal.innerHTML = "Итоговая сумма" + "<br>" + productsCart[i].price.toLocaleString() + " " + "BYN";
                    for (let i = 0; i < productsCart.length; i++){
                      summaPokupok = productsCart[i].price;;
                    }
                    basketSumma.innerHTML = "Стоимость покупки составит:" + "<br>" + summaPokupok.toLocaleString() + " " + "BYN";
                  } else {
                    count = count - 1;
                    btnCount.innerText = count;
                    priceTotal.innerHTML = "Итоговая сумма" + "<br>" + (pticeRez * count).toLocaleString() + " " + "BYN";
                    for (let i = 0; i < productsCart.length; i++){
                      summaPokupok -= productsCart[i].price;;
                    }
                    basketSumma.innerHTML = "Стоимость покупки составит:" + "<br>" + summaPokupok.toLocaleString() + " " + "BYN";
                  }
                });

                deleteItemIcon.addEventListener('click', function() {
                  item.remove();
                })

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


            izbrannoe.containerCart.appendChild(wrapper);
            izbrannoe.containerCart.appendChild(basketSumma);
        });



    }

    getProductCart(){
        let products = cardStore.getProduct();
        let productsCart = [];
        for( let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].idIzbr) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }

}

//let izbrannoe = new Izbrannoe('.basket', '.container_cart', catalogAllCar);
let izbrannoe = new Izbrannoe('.izbrannoe', '.izbrannoeAll', catalogAllCar);
