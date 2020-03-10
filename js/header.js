    class AllProducts {
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

              if (title.innerText == "Продажа автомобилей") {
                  activeLink = this.catalogProducts[i].linkHome;
                  logo.href = "#";
                  imgLogo.src = "img/logo.svg";
              }
              else {
                  activeLink = this.catalogProducts[i].link;
                  logo.href = "../index.html";
                  imgLogo.src = "../img/logo.svg";
              }


                let li = createOneProduct.getProductItem({
                    tagName: "li"
                })
                let li_a = createOneProduct.getProductItem({
                    tagName: "a",
                    id: this.catalogProducts[i].id,
                    className: "ru",
                    hrefLink: activeLink,
                    textName: this.catalogProducts[i].title
                })
                let li_aEn = createOneProduct.getProductItem({
                    tagName: "a",
                    id: this.catalogProducts[i].id,
                    className: "en",
                    hrefLink: activeLink,
                    textName: this.catalogProducts[i].titleEn
                })
                li.appendChild(li_a);
                li.appendChild(li_aEn);
                wrapper.appendChild(li);

                li_a.addEventListener('click', function() {
                  logoActive();
                })
                li_aEn.addEventListener('click', function() {
                  logoActive();
                })
            }
            this.containerProducts.appendChild(wrapper);
        }

    }




let header = document.querySelector(".header");

let menu_left = document.createElement("div");
menu_left.className = "menu_left";
header.appendChild(menu_left);

let menu__nav = document.createElement("nav");
menu__nav.className = "menu__nav";
menu_left.appendChild(menu__nav);

let menu__nav__ul = document.createElement("ul");
menu__nav__ul.className = "menu__nav__ul";
menu__nav.appendChild(menu__nav__ul);

let burger = document.createElement('div');
burger.className = "burger";
for (let i = 0; i < 3; i++) {
  let spanBurger = document.createElement('span');
  burger.appendChild(spanBurger);
}
menu_left.appendChild(burger);

burger.addEventListener('click', function() {
  this.classList.toggle('for-close');
  menu__nav.classList.toggle('is-open');
  menu__nav__ul.classList.toggle('active');
})


let menu_right = document.createElement("div");
menu_right.className = "menu_right";
menu_left.appendChild(menu_right);

let btn_extr =  document.createElement("button");
btn_extr.type = "button";
btn_extr.className = "ru";
btn_extr.innerHTML = "Войти";
let btn_extrEn =  document.createElement("button");
btn_extrEn.type = "button";
btn_extrEn.className = "en";
btn_extrEn.innerHTML = "To come in";
menu_right.appendChild(btn_extr);
menu_right.appendChild(btn_extrEn);

let btn_registr =  document.createElement("button");
btn_registr.type = "button";
btn_registr.className = "ru";
btn_registr.innerHTML = "Регистрация";
let btn_registrEn =  document.createElement("button");
btn_registrEn.type = "button";
btn_registrEn.className = "en";
btn_registrEn.innerHTML = "Registration";
menu_right.appendChild(btn_registr);
menu_right.appendChild(btn_registrEn);

let select =  document.createElement("div");
select.className = "language";

let option1 = document.createElement("a");
option1.id = "ru";
option1.innerHTML = "RU";
//option1.href = "index.html";
select.appendChild(option1);

let option2 = document.createElement("a");
option2.id = "en";
option2.innerHTML = "EN";
//option2.href = "indexEn.html";
select.appendChild(option2);
menu_right.appendChild(select);

let titleText = document.querySelector('title');

var imgLogo = document.createElement("img");
imgLogo.className = "icon-logo";
imgLogo.alt = "Logo";


var logo = document.createElement("a");
logo.className = "logo";

logo.appendChild(imgLogo);
header.appendChild(logo);

let search = document.createElement("div");
search.className = "b-search";
search.id = "b-search";

let formHeader = document.createElement("form");
formHeader.className = "search__form";
formHeader.method = "get";
formHeader.action = "/search/";
formHeader.target = "_blank";

let fieldsetHeader = document.createElement("fieldset");
fieldsetHeader.className = "search_inputwrap";
let inputHeader = document.createElement("input");
inputHeader.id = "text-to-find";
inputHeader.className = "form_text ru";
inputHeader.name = "term";
inputHeader.placeholder = "Поиск";
let inputHeaderEn = document.createElement("input");
inputHeaderEn.className = "form_text en";
inputHeaderEn.placeholder = "Search";
let buttonHeader = document.createElement("button");
buttonHeader.type = "submit";
buttonHeader.className = "search_submit";
//buttonHeader.onclick = "javascript: FindOnPage('text-to-find',true); return false;"

fieldsetHeader.appendChild(inputHeader);
fieldsetHeader.appendChild(inputHeaderEn);
fieldsetHeader.appendChild(buttonHeader);
formHeader.appendChild(fieldsetHeader);
search.appendChild(formHeader);

header.appendChild(search);


let basket = document.createElement("div");
basket.className = "basket";
let basketIcon = document.createElement("div");
basketIcon.className = "basket_icon";
let spanBasket = document.createElement("span");
spanBasket.innerHTML = "корзина";
spanBasket.className = "ru";
let spanBasketEn = document.createElement("span");
spanBasketEn.innerHTML = "basket";
spanBasketEn.className = "en";
let basketProduct = document.createElement("div");
basketProduct.className = "basket_product";
let spanBasketProd = document.createElement("span");
spanBasketProd.className = "spanBasketProd ru";
spanBasketProd.innerHTML = "нет товаров";
let spanBasketProdEn = document.createElement("span");
spanBasketProdEn.className = "spanBasketProd en spanBasketProdEn";
spanBasketProdEn.innerHTML = "no goods";
basketIcon.appendChild(spanBasket);
basketIcon.appendChild(spanBasketEn);
basketProduct.appendChild(spanBasketProd);
basketProduct.appendChild(spanBasketProdEn);
basket.appendChild(basketIcon);
basket.appendChild(basketProduct);
header.appendChild(basket);




let allProducts = new AllProducts('.menu__nav__ul', menuTitleUp);

let divAllForm = document.createElement("div");
let extranceModal = document.createElement("div");
extranceModal.className = "extrance";

let formModal = document.createElement("form");
formModal.className = "form_extrance";
formModal.name = "form";
formModal.action = "myPages.html";
formModal.method = "POST";

let inputFormName = document.createElement("input");
inputFormName.className = "inputForm";
inputFormName.id = "inputName";
inputFormName.dataset.rule = "required name";
inputFormName.type ="text";
inputFormName.name = "name";
inputFormName.required = "required";
inputFormName.placeholder = "Введите имя";

let inputFormFamilia = document.createElement("input");
inputFormFamilia.className = "inputForm";
inputFormFamilia.id = "inputFamilia";
inputFormFamilia.type ="text";
inputFormFamilia.required = "required";
inputFormFamilia.dataset.rule = "required familia";
inputFormFamilia.name = "familia";
inputFormFamilia.placeholder = "Введите фамилию";

let inputFormEmail = document.createElement("input");
inputFormEmail.className = "inputForm";
inputFormEmail.id = "inputEmail";
inputFormEmail.type ="email";
inputFormEmail.name = "email";
inputFormEmail.required = "required";
inputFormEmail.dataset.rule = "required email";
inputFormEmail.placeholder = "Введите e-mail";


let inputFormPass = document.createElement("input");
inputFormPass.className = "inputForm";
inputFormPass.id = "inputPass";
inputFormPass.type ="password";
inputFormPass.name = "password";
inputFormPass.dataset.rule = "required pass";
inputFormPass.required = "required";
inputFormPass.placeholder = "Введите пароль";


let buttonForm = document.createElement("button");
buttonForm.id = "extranceBtn";
buttonForm.type = "submit";
buttonForm.name = "button";
buttonForm.innerText = "Вход";

let containerExtrance = document.createElement("div");
containerExtrance.className = "containerExtrance";

document.body.appendChild(containerExtrance);

let buttonFormReg = document.createElement("button");
buttonFormReg.id = "registrBtn"
buttonFormReg.type = "submit";
buttonFormReg.name = "button";
buttonFormReg.innerText = "Зарегистрироваться";


let i_esc = document.createElement("i");
i_esc.className = "fas fa-times";
divAllForm.appendChild(i_esc);


btn_extr.addEventListener("click", btn_extrFunc);
btn_extrEn.addEventListener("click", btn_extrFunc);

btn_registr.addEventListener("click", btn_registrFunc);
btn_registrEn.addEventListener("click", btn_registrFunc);

function btn_registrFunc() {
  formModal.appendChild(inputFormName);
  formModal.appendChild(inputFormFamilia);
  formModal.appendChild(inputFormEmail);
  formModal.appendChild(inputFormPass);
  formModal.appendChild(buttonFormReg);
  extranceModal.appendChild(formModal);
  divAllForm.appendChild(extranceModal);
  containerExtrance.style.display = "block";
  containerExtrance.appendChild(divAllForm);
  let extrBtn = document.getElementById('registrBtn');
  extranceBtn(extrBtn);
}
function btn_extrFunc() {
  formModal.appendChild(inputFormEmail);
  formModal.appendChild(inputFormPass);
  formModal.appendChild(buttonForm);
  extranceModal.appendChild(formModal);
  divAllForm.appendChild(extranceModal);
  containerExtrance.style.display = "block";
  containerExtrance.appendChild(divAllForm);
  let extrBtn = document.getElementById('extranceBtn');
  extranceBtn(extrBtn);
  return containerExtrance;
}

i_esc.addEventListener("click", () => {
  //  this.parentNode.parentNode.parentNode.remove();
  containerExtrance.style.display = "none";
})


let btn_myPage =  document.createElement("button");
btn_myPage.type = "button";
btn_myPage.style.display = "none";
btn_myPage.className = "ru myPage";
btn_myPage.innerHTML = "Выход";
let btn_myPageEn =  document.createElement("button");
btn_myPageEn.type = "button";
btn_myPageEn.style.display = "none";
btn_myPageEn.className = "en myPage";
btn_myPageEn.innerHTML = "Esctrance";
menu_right.appendChild(btn_myPage);
menu_right.appendChild(btn_myPageEn);

if(titleText.innerText == "Мой кабинет") {
  btn_myPage.style.display = "block";
  btn_registr.style.display = "none";
  btn_extr.style.display = "none";
}
btn_myPage.addEventListener("click", function() {
  btn_registr.style.display = "block";
  btn_extr.style.display = "block";
  this.style.display = "none";
})


let form = document.getElementsByTagName('form');
for (let i = 0; i < form.length; i++) {
  form[i].addEventListener('submit', validator);
}
let rules = {
  required: function(el) {
    if(el.value != '') {
      return true;
    }
    return false;
  },
  email: function(el) {
    let reg = /^\w{1,}@\w{1,}\.\w{1,}$/;
      return reg.test(el.value)
  }
}
function showErrors(arr) {
  console.log(arr);
}
function validator(e) {
//  e.preventDefault();
  let errors = [];
  let inputs = this.elements;
  for(let i = 0; i< inputs.length; i++){
    if (inputs[i].tagName != 'BUTTON') {
      let rulesList = inputs[i].dataset.rule;
      rulesList = rulesList.split(' ');
      for (let j = 0; j < rulesList.length; j++) {
        if(rulesList[j] in rules) {
          if(!rules[rulesList[j]](inputs[i])) {
            errors.push({
              name: inputs[i].name,
              error: rulesList[j]
            })
          }
        }
      }
    }
  }
  if(errors.length > 0) {
    e.preventDefault();
    showErrors(errors);
  }
}














//для валидации формы
function extranceBtn(btnClickForm) {
  let inputValid = document.querySelectorAll('.inputForm');
  btnClickForm.addEventListener('click', function() {
    valid = true;
    for (let i = 0; i < inputValid.length; i++) {
      if (document.form.email.value == "") {
          inputValid[2].style.border = "5px solid red";
          valid = false;
        }

      if (document.form.password.value == "") {
          inputValid[3].style.border = "5px solid red";
          valid = false;
        }
      if (document.form.name.value == "")  {
          //alert ( "Пожалуйста введите имя " );
          inputValid[0].style.border = "5px solid red";
          valid = false;
        }

      if (document.form.familia.value == "") {
        //  alert ( "Пожалуйста введите фамилию " );
          inputValid[1].style.border = "5px solid red";
          valid = false;
        }

        else {
          inputValid[i].style.borderColor = "5px solid green";
        }
          if((document.form.name.value != "") &&  (document.form.familia.value != "") && (document.form.email.value != "") &&  (document.form.password.value != "")) {
              containerExtrance.style.display = "none";
              containerExtrance.innerHTML = "";
          }
        return valid;
      }
    });
}
