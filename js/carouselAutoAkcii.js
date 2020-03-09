	 let i = 1;
	 let carousel = document.getElementById('carousel');


	 /* конфигурация */
	 let width
	 	if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
			 width = 320;
		}
	 else
	  width = 380; // ширина картинки
	let count = 3; // видимое количество изображений


	 let list = carousel.querySelector('ul');
	 let listElems = carousel.getElementsByClassName('li_gall');

	 let position = 0; // положение ленты прокрутки

	 carousel.querySelector('.prev').onclick = function() {
		 // сдвиг влево
		 	if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
				position += width * (count - 2);
			} else
		 		position += width * count;
		 // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
		 position = Math.min(position, 0)
		 list.style.marginLeft = position + 'px';
	 };

	 carousel.querySelector('.next').onclick = function() {
		 // сдвиг вправо
		 if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
			 position -= width * (count - 2);
		 }
		else
		position -= width * count;
		 // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
		 position = Math.max(position, -width * (listElems.length - count));
		 list.style.marginLeft = position + 'px';
	 };
