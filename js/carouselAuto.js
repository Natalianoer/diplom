class SliderAuto {
    constructor(containerProducts, catalogProducts) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.createProduct();
    }

    createProduct() {
        let wrapper = document.createElement('slot');
        for (let i=0; i<this.catalogProducts.length; i++) {
            let item = createOneProduct.getProductItem({
                tagName: "div",
                className: "item"
            })
            let img = createOneProduct.getProductItem({
                tagName: "div",
                className: "divImg",
              //  imgSrc: this.catalogProducts[i].img
                backgroundImg: `url(${this.catalogProducts[i].img})`
            })
            item.appendChild(img);
            wrapper.appendChild(item);

        }
        this.containerProducts.appendChild(wrapper);

    }

}

let sliderAuto = new SliderAuto('.slider', sliderAutoImg);





/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// <div class="item">
//     <img src="./img/auto/1.jpg" alt="Auto 1">
//    <div class="slideText">Заголовок слайда 1</div>
// </div>
