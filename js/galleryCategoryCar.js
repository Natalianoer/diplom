const descrCar = [
  {
    img: '../img/auto/kartochka/skodaRap.jpg'
  },
  {
    img: '../img/auto/kartochka/2.jpeg'
  },
  {
    img: '../img/auto/kartochka/3.jpg'
  },
  {
    img: '../img/auto/kartochka/4.jpg'
  },
  {
    img: '../img/auto/kartochka/5.jpg'
  },
  {
    img: '../img/auto/kartochka/6.jpg'
  },
  {
    img: '../img/auto/kartochka/7.jpg'
  }
]
let slideIndex = 1;
class DescriptionCarGallery {
    constructor(containerProducts, containerDots, catalogProducts) {
        this.containerProducts = document.querySelector(containerProducts);
        this.containerDots = document.querySelectorAll(containerDots);
        this.catalogProducts = catalogProducts;
        this.createProduct();
    }

    createProduct() {
        let wrapper = document.createElement('slot');
        for (let i=0; i<this.catalogProducts.length; i++) {
            this.containerDots[i].style.backgroundImage = `url(${this.catalogProducts[i].img})`;
            let item = this.getProductItem({
                tagName: "div",
                className: "item"
            })
            let img = this.getProductItem({
                tagName: "div",
                className: "divImg",
              //  imgSrc: this.catalogProducts[i].img
                backgroundImg: `url(${this.catalogProducts[i].img})`
            })

            item.appendChild(img);
            wrapper.appendChild(item);

        }
        this.containerProducts.appendChild(wrapper);
        console.log(this.containerDots.length);
    }

    getProductItem(card) {//proverka dannuh
        let element = document.createElement(card.tagName);
        if ('className' in card) {
            element.setAttribute('class', card.className);
        }
        if ('backgroundImg' in card) {
            element.style.backgroundImage = card.backgroundImg;
        }
        return element;
    }
}

let descriptionCarGallery = new DescriptionCarGallery('.sliderAuto', '.slider-dots_item', descrCar);





/* Индекс слайда по умолчанию */
//let slideIndex = 1;
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
