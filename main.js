/*SELECTORES*/

const menuEmail = document.querySelector('.navbar-email');
//Se crea un selector,para hacer que aprezca o desaparezca,
const menuHamIcon = document.querySelector('.menu');
/* Menu carrito*/
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
//productDetailCloseIcon
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//Desktop Menu
const desktopMenu = document.querySelector('.desktop-menu');
//selector menú hamburguesa.
const mobileMenu = document.querySelector('.mobile-menu');
// Product detail
const shoppingCartcontainer = document.querySelector('#shoppingCartContainer');
//ProductDetail container
const productDetailContainer = document.querySelector('#productDetail');
// Card-conrtainer
const cardsContainer = document.querySelector('.cards-container');

/*AddEventListener ('click') */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/*FUNCIONES*/

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    //Para cerrar el menucarrito mientras abrimos menu-mobile
    const isAsideClosed = shoppingCartcontainer.classList.contains('inactive');
    //Ciclo if para afirmar que nuestro mibile se cierre
    if(!isAsideClosed){
        shoppingCartcontainer.classList.add('inactive');
    } 
    const isMobileMenuOpen = productDetailCloseIcon .classList.contains('inactive');
    if (!isMobileMenuOpen) {
        productDetailCloseIcon.classList.remove("inactive");
    }
    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    //Para cerrar el menumobile mientras abrimos menucarrito
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    //Ciclo if para afirmar que nuestro mibile se cierre
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 
    //Para cerrar el menumobile mientras abrimos menucarrito
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    //Ciclo if para afirmar que nuestro mibile se cierre
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    } 
    
    shoppingCartcontainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartcontainer.classList.add('inactive');


    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike' ,
    price: 150 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Compu' ,
    price: 200 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Compu' ,
    price: 300 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
//Crear cada uno de los elemtos de nuestro HTML, con el ciclo for
/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
    //<div class="product-card">

//Se crea una función para mejor organización y para reutilizar código    
function renderProducts(arr) {
    for (product of productList) {
    const productCard= document.createElement('div');
    productCard.classList.add('product-card');
       
    //<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    //Linea que permite reponder a un click sobre el elemento 
    productImg.addEventListener('click', openProductDetailAside);
    
    //<div class="product-info">
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
         
    //Product info div, <div>
    const productInfoDiv = document.createElement('div');

    //Product price, <p>$120,00</p>
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    //Product name, <p>Bike</p>
    const productName = document.createElement('p');
    productName.innerText = product.name;

    //Anexamos mediante el parametro appendChild
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    //Product InfoFigure <figure>
    const productInfoFigure = document.createElement('figure');
      
    //Product Img <img src="./icons/bt_add_to_cart.svg" alt="">
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    //Anexamos mediante el parametro appendChild
    productInfoFigure.appendChild(productImgCart);

    //Anexamos mediante el parametro appendChild los parametro 'div' y 'figure' 
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    //Anexamos mediante el parametro appendChild
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    }   
}    
renderProducts(productList);    