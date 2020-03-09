class AllCatalog {
    constructor(containerProducts, catalogCounter, catalogProducts, carActiveId, filterModel, filterModelId) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.catalogCounter = document.querySelector(catalogCounter);
        this.carActiveId = carActiveId;
        this.filterModelId = filterModelId;
        this.filterModel = document.querySelector(filterModel);
        this.createProduct();
    }

    createProduct() {
        let wrapper = document.createElement('slot');
        let wrapper2 = document.createElement('slot');
        let products = cardStore.getProduct();
        let result = [];
        this.containerProducts.innerHTML = "";
        this.catalogCounter.innerHTML = products.length;

        for (let i=0; i<this.catalogProducts.length; i++) {

            let index = products.indexOf(this.catalogProducts[i].id);
            let activeText;
            let activeTextEn;

            if (index === -1) {
                activeText = "Добавить в корзину";
                activeTextEn = "Add to Basket";
            } else {
                activeText = "Удалить из корзины";
                activeTextEn = "Remove from Cart";
            }

            result.push(this.catalogProducts[i].name);//для фильтра моделей

            let item = createOneProduct.getProductItem({
                tagName: "div",
                className: "item"
            })
            let item_descriptionTitle = createOneProduct.getProductItem({
                tagName: "div",
                className: "item_descriptionTitle"
            })
            let name = createOneProduct.getProductItem({
                tagName: "a",
                hrefLink: this.catalogProducts[i].hrefLink,
                className: "name",
                textName: this.catalogProducts[i].name + " " + this.catalogProducts[i].model
            })
            let img = createOneProduct.getProductItem({
                tagName: "div",
                className: "img",
                backgroundImg: `url(${this.catalogProducts[i].img})`   //nazvanie svoistva =
            })
            let price = createOneProduct.getProductItem({
                tagName: "div",
                className: "price",
                textName: this.catalogProducts[i].price.toLocaleString() + " " + "BYN"
            })
            let btn = createOneProduct.getProductItem({
                tagName: "button",
                className: "btn ru",
                id: this.catalogProducts[i].id,
                textName: activeText
            })
            let btnEn = createOneProduct.getProductItem({
                tagName: "button",
                className: "btn en",
                id: this.catalogProducts[i].id,
                textName: activeTextEn
            })
            let btnIzbrannoe = createOneProduct.getProductItem({
                tagName: "i",
                className: "btnIzbrannoe fab fa-gratipay",
                id: this.catalogProducts[i].idIzbr
            })
            let item_descriptionText = createOneProduct.getProductItem({
                tagName: "div",
                className: "item_descriptionText"
            })
            let year = createOneProduct.getProductItem({
                tagName: "p",
                className: "year",
                textName:  this.catalogProducts[i].year
            })
            let capacity = createOneProduct.getProductItem({
                tagName: "p",
                className: "capacity",
                textName:  this.catalogProducts[i].capacity
            })
            let span_descr = createOneProduct.getProductItem({
                tagName: "span",
                textName: this.catalogProducts[i].span_descr
            })
            let span_descrCity = createOneProduct.getProductItem({
                tagName: "span",
                textName: this.catalogProducts[i].span_descrCity
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
                overwriteCount();
            });
            btnEn.addEventListener('click', function (){
                let id = this.getAttribute('id');
                let result = cardStore.putProduct(id);
                if (result.statusProduct) {
                    this.innerHTML = "Remove from Cart";
                }
                else {
                    this.innerHTML = "Add to Cart";
                }
                overwriteCount();
            });
            btnIzbrannoe.addEventListener('click', function (){
                let id = this.getAttribute('id');
                let result = cardStore.putProduct(id);
                if (result.statusProduct) {
                    btnIzbrannoe.style.backgroundColor = "#4B0082";
                    btnIzbrannoe.style.color = "white";
                }
                else {
                    btnIzbrannoe.style.color = "#4B0082";
                    btnIzbrannoe.style.backgroundColor = "white";
                }
            });


            if(this.carActiveId == this.catalogProducts[i].categoryCar || this.carActiveId == "filterAllBtn" || this.carActiveId == "catalogContAll" || this.filterModelId == this.catalogProducts[i].nameFilter) {
                item.appendChild(img);
                item_descriptionTitle.appendChild(name);
                item_descriptionTitle.appendChild(price);
                item_descriptionTitle.appendChild(btn);
                item_descriptionTitle.appendChild(btnEn);
                item_descriptionTitle.appendChild(btnIzbrannoe);
                item_descriptionText.appendChild(year);
                item_descriptionText.appendChild(capacity);
                item_descriptionText.appendChild(span_descr);
                item_descriptionText.appendChild(span_descrCity);
                item.appendChild(item_descriptionTitle);
                item.appendChild(item_descriptionText);
                wrapper.appendChild(item);
              }

        }
//Для фильтрации по модели
// if (this.filterModelId == this.nameFilter) {
        let p_model = createOneProduct.getProductItem({
          tagName: "p",
          textName: this.unique(result)
        })

        let filter_modelCar = p_model.innerText;
        let arrayOfStrings = filter_modelCar.split(',');

        if (this.filterModelId == this.nameFilter) {
          for (let i = 0; i < arrayOfStrings.length; i++) {
            let p = document.createElement("p");
            p.id = arrayOfStrings[i].toLowerCase();
            p.innerText = arrayOfStrings[i];

              wrapper2.appendChild(p);
            }

         this.filterModel.appendChild(wrapper2);
    }
     this.containerProducts.appendChild(wrapper);
  }

    unique(arr) {
      let arrFilter = [];
          for (let str of arr) {
            if (!arrFilter.includes(str)) {
              arrFilter.push(str);
            }
          }
          return arrFilter;
      }

}



  let allCatalog = new AllCatalog('.container_catalogAll', '.spanBasketProd', catalogAllCar, 'catalogContAll', '.marka_filter');
