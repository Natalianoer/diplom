// <ul class="images">
//   <li><img src="./img/auto/1.jpg"><div id="timer" class="timer"></div></li>
//   <li><img src="./img/auto/2.jpg"></li>
// </ul>

class GalleryTimer {
    constructor(containerProducts, catalogProducts) {
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProducts = catalogProducts;
        this.createProduct();
    }

    createProduct() {
        let wrapper = document.createElement('slot');
        for (let i=0; i<this.catalogProducts.length; i++) {
            let li_gall = createOneProduct.getProductItem({
                tagName: "li",
                className: "li_gall"
            })
            let img_gall = createOneProduct.getProductItem({
                tagName: "img",
                imgSrc: this.catalogProducts[i].imgGall
            })
            let span_gall = createOneProduct.getProductItem({
                tagName: "span",
                className: "span_gall",
                textName: i
            })
            let div_timer = createOneProduct.getProductItem({
                tagName: "div",
                id: "timer" + i,
                className: "timer"
            })
            let timerList = Object.values(this.catalogProducts[i].allTimer)
            for (let i=0; i<timerList.length; i++) {
              let timer_block = createOneProduct.getProductItem({
                  tagName: "div",
                  className: "timer_block"
              })
              //let timerListOne = Object.values(timerList[i])
              //for (let i=0; i<timerList.length; i++) {
                  var timer_time = createOneProduct.getProductItem({
                        tagName: "span",
                        className: "timer_time" + " " + timerList[i].classTimer,
                        textName: timerList[i].classTimer
                  })
                  var timer_text = createOneProduct.getProductItem({
                      tagName: "span",
                      className: "timer_text",
                      textName: timerList[i].textTimer
                  })
                //}
                timer_block.appendChild(timer_time);
                timer_block.appendChild(timer_text);
                div_timer.appendChild(timer_block);
                li_gall.appendChild(div_timer);
            }


            li_gall.appendChild(img_gall);
            li_gall.appendChild(span_gall);

            wrapper.appendChild(li_gall);

        }
        this.containerProducts.appendChild(wrapper);

    }

}

let galleryTimer = new GalleryTimer('.images', gallTimer);



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
      initializeClock(id, deadline);
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// var deadline = new Date(Date.parse(new Date()) + 800000 * 1000);
var deadline = "March 16 2020 00:00:00 GMT+0300";
var deadline2 = "March 12 2020 00:00:00 GMT+0300";
var deadline3 = "March 17 2020 00:00:00 GMT+0300";
var deadline4 = "March 13 2020 00:00:00 GMT+0300";
var deadline5 = "March 19 2020 00:00:00 GMT+0300";
var deadline6 = "March 22 2020 00:00:00 GMT+0300";
var deadline7 = "March 28 2020 00:00:00 GMT+0300";
var deadline8 = "April 1 2020 00:00:00 GMT+0300";
initializeClock("timer0", deadline);
initializeClock("timer1", deadline2);
initializeClock("timer2", deadline3);
initializeClock("timer3", deadline4);
initializeClock("timer4", deadline5);
initializeClock("timer5", deadline6);
initializeClock("timer6", deadline7);
initializeClock("timer7", deadline8);
