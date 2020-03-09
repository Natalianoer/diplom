class AllFooter {
    constructor(containerProducts, catalogProducts) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.createProduct();
    }

    createProduct() {
        let wrapper = document.createElement('slot');
        let title = document.querySelector(".title");
        for (let i=0; i<this.catalogProducts.length; i++) {
          let activeLink;
          let objList = Object.values(this.catalogProducts[i].list)
          let objListEn = Object.values(this.catalogProducts[i].listEn)
          let objLink = Object.values(this.catalogProducts[i].link)
          let objLinkHome = Object.values(this.catalogProducts[i].linkHome)


          if (title.innerText == "Продажа автомобилей") {
              activeLink = objLinkHome[i];
          }
          else {
              activeLink = objLink[i];
          }



            let footerHelp = createOneProduct.getProductItem({
                tagName: "div",
                className: "main__footer__help"
            })
            let spoilerClick = createOneProduct.getProductItem({
                tagName: "div",
                className: "main__footer__spoiler-click"
            })
            let h6 = createOneProduct.getProductItem({
                tagName: "h6",
                className: "ru",
                textName: this.catalogProducts[i].title
            })
            let h6En = createOneProduct.getProductItem({
                tagName: "h6",
                className: "en",
                textName: this.catalogProducts[i].titleEn
            })
            let ul = createOneProduct.getProductItem({
                tagName: "ul",
                className: "main__footer__spoiler"
            })

            for (let i=0; i<objList.length; i++) {
              let li = createOneProduct.getProductItem({
                  tagName: "li"
              })
              let li_a = createOneProduct.getProductItem({
                  tagName: "a",
                  className: "ru",
                  textName: objList[i],
                  hrefLink: activeLink
              })
              let li_aEn = createOneProduct.getProductItem({
                  tagName: "a",
                  className: "en",
                  textName: objListEn[i],
                  hrefLink: activeLink
              })
              ul.appendChild(li);
              li.appendChild(li_a);
              li.appendChild(li_aEn);
            }
            spoilerClick.appendChild(h6);
            spoilerClick.appendChild(h6En);
            footerHelp.appendChild(spoilerClick);
            footerHelp.appendChild(ul);
            wrapper.appendChild(footerHelp);
        }
        this.containerProducts.appendChild(wrapper);
    }

}

let footer = document.querySelector(".footer");
let mainFooter = document.createElement("div");
mainFooter.className = "main__footer";
let social = document.createElement("div");
social.className = "social_network";
let phoneFooter = document.createElement("div");
phoneFooter.className = "phoneFooter";
let tel1 = document.createElement("a");
tel1.href = "tel:+375339999999";
tel1.innerText = "+375 33 999 99 99";
let tel2= document.createElement("a");
tel2.href = "tel:+375299999999";
tel2.innerText = "+375 29 999 99 99"


footer.appendChild(social);
phoneFooter.appendChild(tel1);
phoneFooter.appendChild(tel2);
footer.appendChild(phoneFooter);
footer.appendChild(mainFooter);


let footerAll = new AllFooter('.main__footer', footerList);

class SocialIconAll {
    constructor(containerProducts, catalogProducts) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.createProduct();
    }

    createProduct() {
        let wrapper = document.createElement('slot');
        for (let i=0; i<this.catalogProducts.length; i++) {
          let social_href = this.getProductItem({
              tagName: "a",
              hrefLink:  this.catalogProducts[i].link
          })
          let social_i = this.getProductItem({
              tagName: "i",
              className: this.catalogProducts[i].classIcon

          })
            social_href.appendChild(social_i);
            wrapper.appendChild(social_href);
        }
        this.containerProducts.appendChild(wrapper);
    }

    getProductItem(card) {//proverka dannuh
        let element = document.createElement(card.tagName);
        if ('className' in card) {
            element.setAttribute('class', card.className);
        }
        if ('hrefLink' in card) {
            element.setAttribute('href', card.hrefLink);
        }
        return element;
    }
}
let socialIconAll = new SocialIconAll('.social_network', socialSeti);


let menu_spoilerClick = document.querySelectorAll("div.main__footer__spoiler-click");

menu_spoilerClick.forEach(function(element){
    element.addEventListener("click", function() {
      element.classList.toggle('active');
});
});
