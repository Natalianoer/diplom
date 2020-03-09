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


                let li = this.getProductItem({
                    tagName: "li"
                })
                let li_a = this.getProductItem({
                    tagName: "a",
                    id: this.catalogProducts[i].id,
                    linkName: activeLink,
                    textName: this.catalogProducts[i].title
                })
                li.appendChild(li_a);
                wrapper.appendChild(li);

                li_a.addEventListener('click', function() {
                  logoActive();
                })
            }
            this.containerProducts.appendChild(wrapper);
            //logoActive();
        }

        getProductItem(card) {//proverka dannuh
            let element = document.createElement(card.tagName);
            if ('textName' in card) {
                element.innerHTML = card.textName;
            }
            if ('linkName' in card) {
                element.setAttribute('href', card.linkName);
            }
            if ('id' in card) {
                element.setAttribute('id', card.id);
            }
            return element;

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
btn_extr.innerHTML = "Войти";
menu_right.appendChild(btn_extr);

let btn_registr =  document.createElement("button");
btn_registr.type = "button";
btn_registr.innerHTML = "Регистрация";
menu_right.appendChild(btn_registr);

// let select =  document.createElement("select");
// select.className = "language";
//
// let option1 = document.createElement("option");
// option1.value = "Русский";
// option1.id = "ru";
// option1.innerHTML = "Русский";
// select.appendChild(option1);
//
// let option2 = document.createElement("option");
// option2.value = "English";
// option2.id = "en";
// option2.innerHTML = "English";
// select.appendChild(option2);
let select =  document.createElement("div");
select.className = "language";

let option1 = document.createElement("a");
option1.id = "ru";
option1.innerHTML = "RU";
select.appendChild(option1);

let option2 = document.createElement("a");
option2.id = "en";
option2.innerHTML = "EN";
select.appendChild(option2);
menu_right.appendChild(select);

let titleText = document.getElementsByClassName('title');

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
inputHeader.className = "form_text";
inputHeader.name = "term";
inputHeader.placeholder = "Поиск";
let buttonHeader = document.createElement("button");
buttonHeader.type = "submit";
buttonHeader.className = "search_submit";
//buttonHeader.onclick = "javascript: FindOnPage('text-to-find',true); return false;"

fieldsetHeader.appendChild(inputHeader);
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
let basketProduct = document.createElement("div");
basketProduct.className = "basket_product";
let spanBasketProd = document.createElement("span");
spanBasketProd.className = "spanBasketProd";
spanBasketProd.innerHTML = "нет товаров";
basketIcon.appendChild(spanBasket);
basketProduct.appendChild(spanBasketProd);
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

let div_esc = document.createElement('div');
div_esc.className = "div_esc";
div_esc.style.width = "50px";
div_esc.style.height = "50px";
div_esc.style.position = "fixed";
div_esc.style.right = "50px";
div_esc.style.top = "20px";
div_esc.style.background = "red";

extranceModal.appendChild(div_esc);

let i_esc = document.createElement("i");
i_esc.className = "fas fa-times";
div_esc.appendChild(i_esc);


btn_extr.addEventListener("click", () => {
  formModal.appendChild(inputFormEmail);
  formModal.appendChild(inputFormPass);
  formModal.appendChild(buttonForm);
  extranceModal.appendChild(formModal);
  divAllForm.appendChild(extranceModal);
  containerExtrance.style.display = "block";
  containerExtrance.appendChild(divAllForm);
});


div_esc.addEventListener("click", function() {
    this.parentNode.parentNode.parentNode.remove();
  })


btn_registr.addEventListener("click", () => {
  formModal.appendChild(inputFormName);
  formModal.appendChild(inputFormFamilia);
  formModal.appendChild(inputFormEmail);
  formModal.appendChild(inputFormPass);
  formModal.appendChild(buttonFormReg);
  extranceModal.appendChild(formModal);
  divAllForm.appendChild(extranceModal);
  containerExtrance.style.display = "block";
  containerExtrance.innerHTML = divAllForm.innerHTML;
  let extrBtn = document.getElementById('registrBtn');
  extranceBtn(extrBtn);
})
if (buttonForm) {
  buttonForm.addEventListener("click", () => {
    //btn_extr.innerHTML = "Мой кабинет";
    alert('privet');
  })
}



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
