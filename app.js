/*SHOPPING-CART*/
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



let openPops = document.getElementById('open-popup'),
	submenu = document.getElementById('submenu'),
	pops = document.getElementById('pops'),
	closePops= document.getElementById('close-popup');

    openPops.addEventListener('mouseover', function(){
	submenu.classList.add('active');
	pops.classList.add('active');
});

closePops.addEventListener('mouseout', function(e){
	e.preventDefault();
	submenu.classList.remove('active');
	pops.classList.remove('active');
});





}

/*CAROUSSEL*/ 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
}

//ALERT SHOPPING CART
const addCart = document.getElementById('AddCart');
const qty = document.getElementById('qty');

qty.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    alert(`You have added ${this.value} item(s) to your shopping cart`);
  }
  e.preventDefault()
});

addCart.addEventListener('click', function(){
  alert(`You have added ${qty.value} item(s) to your shopping cart`);

});



let color = document.querySelector(".circle");

color.addEventListener('click', function(){
  document.color.style.border = '2px solid black';
});
color.addEventListener("click", black);
