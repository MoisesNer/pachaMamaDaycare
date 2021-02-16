// GLOBAL VARIABLES


/*SHOPPING-CART*/

window.onload=function(){


/*PRODUCT GALLERY */

/*window.onload=function(){


let mainImg1 =document.querySelector("#main1");
let mainImg2 =document.querySelector("#main2");
//mainImg2.style.display="none";
mainImg2.style.visibility="hidden";
let mainImg3 =document.querySelector("#main3");
mainImg3.style.display="none";
mainImg3.style.visibility="hidden";
let mainImg4 =document.querySelector("#main4");
mainImg4.style.display="none";
mainImg4.style.visibility="hidden";


let cont1 = document.querySelector('.small-cont-1');
cont1.addEventListener('click', function(){
  mainImg.style.display="none";
  mainImg.style.visibility="hidden";
  mainImg2.style.display="inline";
  mainImg2.style.visibility="visible";
});*/

function imgGallery(){
  const hightlight = document.querySelector('#main1');
  const previews=document.querySelectorAll('.gallery-img img');

  previews.forEach(preview=>{
    preview.addEventListener('click', function(){
      const smallSrc =this.src;
      const bigSrc =smallSrc.replace('small', 'big');
      hightlight.src=bigSrc;
      //console.log(bigSrc);
      previews.forEach(preview =>preview.classList.remove("img-active"));
      preview.classList.add('img-active');
    });
  });
  
}

imgGallery();


  let totalAmount = 0;
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
  window.onload=function(){
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


  //ADDING TO CART
const addToCart = document.querySelectorAll('.add-cart');

addToCart.forEach(function(btn, index){

  btn.addEventListener('click', function(event){
    let name = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.nextSibling.firstChild.nextSibling.innerText;
    let price = event.target.parentElement.parentElement.parentElement.firstChild.nextSibling.textContent;
    let quantity = parseInt(event.target.parentElement.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value);
    let legend = document.getElementById('cartLegend');
    let totalAmountLeyend = document.getElementById('totalAmount');

    const item = {};
    item.name = name;
    item.price = price.slice(1).trim();
    item.quantity = quantity;

    const cartItem = document.createElement('div')
    cartItem.classList.add('cartItem');
    cartItem.setAttribute("id", "cartItem-" + index);

    cartItem.innerHTML =

    `
    <p class="pItem">${item.quantity} item(s)</p>
    <p>${item.name}</p>
    <p>$ ${item.price}</p>                      
    `

    const cartButton = document.createElement('a')
    cartButton.href = "#"
    cartButton.classList.add('cart-item-remove')
    cartButton.classList.add('tOne')
    cartButton.id = "trash-" + index
    cartButton.innerHTML = `<i class="fas fa-backspace"></i>`
    cartButton.addEventListener('click', () => removeProduct(event, index, item))
    cartItem.appendChild(cartButton)
    
    //PRINTING INTO CART
    popup = document.getElementById('popup')
    popup.appendChild(cartItem);
    
    alert('item added to the cart');

    legend.style.display='none';
    totalAmountLeyend.style.display='block'

    totalAmount += (getTotals(item))
    document.getElementById('cart-total').textContent = totalAmount.toFixed(2);

  })
  
  function getTotals(item){
    
    const totalPriceItem = parseInt(item.quantity) * item.price
   
    return totalPriceItem;
  }

});

//REMOVE ALL ITEMS IN THE CART
const trashAll= document.getElementById('trashAll');
// trashAll.addEventListener('click', function(){
//   while(document.contains(document.getElementById("cartItem"))) {
//     document.getElementsByTagName("cartItem").remove();
//   }
//   totalAmount = 0;
//   document.getElementById('cart-total').textContent = "00.00";
// });


//REMOVE ONE ITEM FROM THE CART

function removeProduct(event, index, item){
  const trashOn= document.querySelectorAll('.cartItem');

  trashOn.forEach((item) => {

    if(item.id == `cartItem-${index}`){
          let valueItem = item.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.textContent
          let finalValue = valueItem.slice(1).trim();

          let totalItems = item.firstChild.nextSibling.textContent
          let totalNumber = totalItems.slice(0, 3).trim();
          totalAmount -=(getSubstraction(finalValue, totalNumber));
          document.getElementById('cart-total').textContent = totalAmount.toFixed(2);

          item.parentElement.removeChild(item)
        
          //FUNCTION TO SUBSTRACT FROM TOTAL
          function getSubstraction(final, total){
            const difference = parseInt(total) *final
            return difference;
          }
    }
    
  });
}


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

/*BURGER MENU*/
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}






