let enActive = document.querySelectorAll(".en");
let ruActive = document.querySelectorAll(".ru");
document.getElementById('en').addEventListener('click', function() {
  enActive.forEach(function(element){
      element.style.display = "block";
  });
  ruActive.forEach(function(element){
      element.style.display = "none";
  });
})
document.getElementById('ru').addEventListener('click', function() {
  enActive.forEach(function(element){
      element.style.display = "none";
  });
  ruActive.forEach(function(element){
      element.style.display = "block";
  });
})
