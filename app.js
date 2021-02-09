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

/*SUBMENU*/
/*window.onload=function(){
let openPops = document.getElementById('open-popup'),
	submenu = document.getElementById('submenu'),
	pops = document.getElementById('pops'),
	closePops= document.getElementById('close-popup');

    openPops.addEventListener('click', function(){
	submenu.classList.add('active');
	pops.classList.add('active');
});

closePops.addEventListener('click', function(e){
	e.preventDefault();
	submenu.classList.remove('active');
	pops.classList.remove('active');
});
}*/