class CreateOneProduct{
    getProductItem(card){
        let element = document.createElement(card.tagName);
        if('className' in card){
            element.setAttribute('class', card.className);
        };
        if('textName' in card){
            element.innerHTML = card.textName;
        };
        if('backgroundImg' in card){
            element.style.backgroundImage = card.backgroundImg;
        };
        if('id' in card){
            element.setAttribute('id', card.id);
        }
        if ('imgSrc' in card) {
            element.src = card.imgSrc;
        }
        if ('hrefLink' in card) {
            element.setAttribute('href', card.hrefLink);
        }
        return element;
    }
}

let createOneProduct = new CreateOneProduct('.container_catalogAll',catalogAllCar);
