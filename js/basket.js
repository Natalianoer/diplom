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
            let products = cardStore.getProduct();
            let basketSumma;

            for( let i = 0; i < productsCart.length; i++){

              let index = products.indexOf(productsCart[i].id);
              let activeText;

              if (index === -1) {
                  activeText = "Добавить в корзину";
              } else {
                  activeText = "Удалить из корзины";
              }

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
                let btn = createOneProduct.getProductItem({
                    tagName: "button",
                    className: "btn",
                    id: productsCart[i].id,
                    textName: activeText
                })
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

                deleteItemIcon.addEventListener('click', function() {
                  item.remove();
                })
                btn.addEventListener('click', function (){
                    let id = this.getAttribute('id');
                    let result = cardStore.putProduct(id);
                    if (result.statusProduct) {
                        this.innerHTML = "Удалить из корзины";
                    }
                    else {
                        this.innerHTML = "Добавление в корзину";
                    }
                });

                item.appendChild(img);
                item.appendChild(name);
                item.appendChild(price);
                item.appendChild(btn);
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
