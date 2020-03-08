let jivositeBtn = document.getElementById('jivositeBtn');
let input_value = document.querySelector('.input_value');
let text_input = document.querySelector('.text_input');

function onClickJivosite() {
  if(document.querySelector('.input_value').value == "") {
    document.querySelector('.otvet').innerText = "Введите пожалуйста сообщение";
    document.querySelector('.otvet').style.display = "block";
  }
  else {
    // let pText = document.createElement("div");
    // pText.className = "text_input";
    // document.querySelector('.jivosite').appendChild(pText);
    document.querySelector('.text_input').innerText = document.querySelector('.input_value').value;
    document.querySelector('.otvet').innerText = "Благодарим! В ближайшее время мы с Вами свяжемся";
    document.querySelector('.otvet').style.display = "block";
  }
  if (document.querySelector('.input_value').value != '')
      document.querySelector('.input_value').value = '';

}

setTimeout(function() {
   document.querySelector('.jivosite_container').style.width = "300px";
}, 2000);

document.querySelector('.jivosite_container').innerHTML = `
  <i class="close fas fa-times-circle"></i>
  <i class="open fas fa-arrow-alt-circle-left"></i>
  <div class="jivosite" id="jivosite">
  <h6>Напишите Ваше сообщение</h6>
  <input class="input_value" type="text" name="" value="" required placeholder="Введите сообщение">
  <div class="text_input"></div>
  <div class="otvet"></div>
  <button type="button" name="button" id="jivositeBtn" onclick="onClickJivosite()">Отправить</button>
  </div>
`;
let close = document.querySelector('.close');
let open = document.querySelector('.open');
if (close) {
  close.addEventListener('click', () => {
    document.querySelector('.jivosite_container').classList.add("closeJivosite");
  })
}

if (open) {
  open.addEventListener('click', () => {
    document.querySelector('.jivosite_container').classList.remove("closeJivosite");
  })
}
