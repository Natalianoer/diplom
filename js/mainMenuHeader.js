class MainMenu {
    constructor(containerProducts, catalogProducts) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.createProduct();
    }

    createProduct() {
        let wrapper = document.createElement('slot');
        for (let i=0; i<this.catalogProducts.length; i++) {
            let li = this.getProductItem({
                tagName: "li",
                className: "menuLi"
            })
            let li_a = this.getProductItem({
                tagName: "a",
                id: this.catalogProducts[i].id,
                textName: this.catalogProducts[i].title
            })
            let car = this.getProductItem({
                tagName: "div",
                className: "car"
            })
            let carModel = this.getProductItem({
                tagName: "div",
                className: "car_model"
            })
            let ul = this.getProductItem({
                tagName: "ul",
            })
            let modelList = Object.values(this.catalogProducts[i].model)
            for (let i=0; i<modelList.length; i++) {
              let liModel = this.getProductItem({
                  tagName: "li"
              })
              let li_aModel = this.getProductItem({
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
            wrapper.appendChild(li);
        }
        this.containerProducts.appendChild(wrapper);
    }

    getProductItem(card) {//proverka dannuh
        let element = document.createElement(card.tagName);
        if ('textName' in card) {
            element.innerHTML = card.textName;
        }
        if ('className' in card) {
            element.setAttribute('class', card.className);
        }
        if ('id' in card) {
            element.setAttribute('id', card.id);
        }
        return element;

    }
}

let main_menu = document.querySelector(".main_menu")

let ul = document.createElement("ul");
ul.className = "main_menu_ul";
ul.id = "main_menu_ul";
main_menu.appendChild(ul);



let mainMenu = new MainMenu('.main_menu_ul', menuMainHeader);
