let rating = document.querySelector('.rating');
// let ulSpisok = document.querySelector(".all_news");
// let lists = ulSpisok.getElementsByTagName("li");
let elementRait;
let element;


function createProduct() {
  for (let i=0; i<5; i++) {
        element = document.createElement("div");
        element.className = "rating_item";
        rating.appendChild(element);
      }
}
createProduct();

//let rating = document.querySelector('.rating');
let ratingItem = document.querySelectorAll('.rating_item');

rating.addEventListener('click', (e) => {
  var target = e.target;
  if(target.classList.contains('rating_item')){
    removeClass(ratingItem,'current_active')
    target.classList.add('active','current_active');
  }
})

rating.addEventListener('mouseover', (e) => {
  var target = e.target;
  if(target.classList.contains('rating_item')){
    removeClass(ratingItem,'active')
    target.classList.add('active');
    mouseOverActiveClass(ratingItem)
  }
})
rating.addEventListener('mouseout', () => {
  addClass(ratingItem,'active');
  mouseOutActiveClass(ratingItem);
})

function removeClass(arr) {
  for(var i = 0, iLen = arr.length; i <iLen; i ++) {
    for(var j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.remove(arguments[j]);
    }
  }
}
function addClass(arr) {
  for(var i = 0, iLen = arr.length; i <iLen; i ++) {
    for(var j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.add(arguments[j]);
    }
  }
}

function mouseOverActiveClass(arr){
  for(var i = 0, iLen = arr.length; i < iLen; i++) {
    if(arr[i].classList.contains('active')){
      break;
    }else {
      arr[i].classList.add('active');
    }
  }
}

function mouseOutActiveClass(arr){
  for(var i = arr.length-1; i >=1; i--) {
    if(arr[i].classList.contains('current_active')){
      break;
    }else {
      arr[i].classList.remove('active');
    }
  }
}
