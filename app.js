window.onload=function(){
let openPopup = document.getElementById('btn-open-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	closePopup = document.getElementById('btn-close-popup');

    openPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

closePopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
}