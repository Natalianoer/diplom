let container_reviewTitle = document.getElementById('container_reviewTitle');
let container_reviewText = document.getElementById('container_reviewText');
let textReview = document.querySelector('.textarea');
let textInput = document.querySelector('.input');
let reviewBtn = document.querySelector('.reviewBtn');


reviewBtn.addEventListener('click', () => {
  container_reviewTitle.innerHTML = "Имя:" + "   " + textInput.value;
  container_reviewText.innerHTML = textReview.value;
   localStorage.getItem(textInput.value);
   localStorage.getItem(textReview.value);
})
