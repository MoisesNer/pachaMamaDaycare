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
      closePops= document.getElementById('close-popup'),
      openPopsMobile = document.getElementById('open-popup-mobile'),
      closePopsMobile = document.getElementById('close-popup-mobile');
      openPops.addEventListener('mouseover', function(){
      submenu.classList.add('active');
      pops.classList.add('active');
  });
  
  closePops.addEventListener('mouseout', function(e){
      e.preventDefault();
      submenu.classList.remove('active');
      pops.classList.remove('active');
  });
  
  /*CLICK ON PRODUCT FOR MOBILE AND TABLE*/
  
  openPopsMobile.addEventListener('click', function(e){
      e.preventDefault();
      submenu.classList.add('active');
      pops.classList.add('active');
  });
  closePopsMobile.addEventListener('click', function(e){
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

//COLORDOT FUNCTION

// let colorDot = document.querySelector(".circle");
    
//     colorDot.addEventListener('click', function(){
//       document.colorDot.style.border = '2px solid black';
//     });
//     color.addEventListener("click", black);

 //ADDING TO CART
const addToCart = document.querySelectorAll('.add-cart');

addToCart.forEach(function(btn){

  btn.addEventListener('click', function(event){
    let name = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.innerText;
    let price = event.target.parentElement.parentElement.parentElement.firstChild.nextSibling.textContent;
    let quantity = parseInt(event.target.parentElement.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value);
    
    const item = {};
    item.name = name;
    item.price = price.slice(1).trim();
    item.quantity = quantity;

    const cartItem = document.createElement('div')
    cartItem.classList.add('cartItem');

    cartItem.innerHTML =

    `
    <p class="pItem">${item.quantity} item(s)</p>
    <p>${item.name}</p>
    <p>$ ${item.price}</p>                      
    <a href="#" id='cart-item-remove' class="cart-item-remove">
      <i class='fas fa-trash'></i>
    </a>
    `
    //PRINTING INTO CART
    popup = document.getElementById('popup')
    popup.appendChild(cartItem);
    
    alert('item added to the cart');
    
    
    showTotals();
  })

  function showTotals(){
    const total = [];
    const items = document.querySelectorAll('.price-item');

    items.forEach(function(item){
      total.push(parseFloat(item.textContent.slice(1).trim()))//getting the amount
    });
    console.log(total);//array con cantidades

    const totalMoney = total.reduce(function(total, item){
      total += item;
      return total;
    }, 0);
    const finalMoney = totalMoney.toFixed(2);

    console.log(finalMoney);
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.price-item').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
  };
});
