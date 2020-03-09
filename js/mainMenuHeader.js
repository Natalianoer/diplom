class MainMenu {
    constructor(containerProducts, catalogProducts) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.createProduct();
    }

    createProduct() {
        let wrapper = document.createElement('slot');
        for (let i=0; i<this.catalogProducts.length; i++) {
            let li = createOneProduct.getProductItem({
                tagName: "li",
                className: "menuLi"
            })
            let li_a = createOneProduct.getProductItem({
                tagName: "a",
                id: this.catalogProducts[i].id,
                className: "ru",
                textName: this.catalogProducts[i].title
            })
            let li_aEn = createOneProduct.getProductItem({
                tagName: "a",
                id: this.catalogProducts[i].id,
                className: "en",
                textName: this.catalogProducts[i].titleEn
            })
            let car = createOneProduct.getProductItem({
                tagName: "div",
                className: "car"
            })
            let carModel = createOneProduct.getProductItem({
                tagName: "div",
                className: "car_model"
            })
            let ul = createOneProduct.getProductItem({
                tagName: "ul",
            })
            let modelList = Object.values(this.catalogProducts[i].model)
            for (let i=0; i<modelList.length; i++) {
              let liModel = createOneProduct.getProductItem({
                  tagName: "li"
              })
              let li_aModel = createOneProduct.getProductItem({
                  tagName: "a",
                  textName: modelList[i]
              })
              liModel.appendChild(li_aModel);
              ul.appendChild(liModel);
            }

            carModel.appendChild(ul);
            car.appendChild(carModel);
            li_a.appendChild(car);
            li.appendChild(li_a);
            li.appendChild(li_aEn);
            wrapper.appendChild(li);
        }
        this.containerProducts.appendChild(wrapper);
    }
}

let main_menu = document.querySelector(".main_menu")

let ul = document.createElement("ul");
ul.className = "main_menu_ul";
ul.id = "main_menu_ul";
main_menu.appendChild(ul);



let mainMenu = new MainMenu('.main_menu_ul', menuMainHeader);
