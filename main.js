// Instanciamos las variables que vamos a utilizar para modificar nuestro documento HTML
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const cartAsideMenu = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

// Agregamos eventos para que al dar click muestre o oculte un contenedor
navEmail.addEventListener('click', () => toggleElement(desktopMenu, cartAsideMenu, productDetail, mobileMenu)); // () = > o arrow function es una funcion anonima utilizada comunmente en ES6 y tiene una sintaxis mas concisa
mobileMenuIcon.addEventListener('click', () => toggleElement(mobileMenu, cartAsideMenu, productDetail, desktopMenu));
cartMenuIcon.addEventListener('click', () => toggleElement(cartAsideMenu, mobileMenu, productDetail, desktopMenu));
productDetailClose.addEventListener('click', () => toggleElement(productDetail, cartAsideMenu, desktopMenu, mobileMenu));


// Esta funcion sirve para encender/apagar una clase y agregar otra, toma 2 parametros como referencia
function toggleElement(elementOpen, elementClose1, elementClose2, elementClose3) {
    elementOpen.classList.toggle('inactive');
    elementClose1.classList.add('inactive');
    elementClose2.classList.add('inactive');
    elementClose3.classList.add('inactive');
}

// Declaramos nuestra variables productList donde guardaremos el objeto producto que puede venir de una BD o insertarla manualmente
const productList = [];

// Insertamos algunos productos en el array para hacer una prueba
productList.push({
    name: 'pantalla',
    price: 90,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'computadora',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

// Creamos la funcion renderProducts asi tenemos mas control de cuando mostrar los productos en la web - esto es una buena practica
function renderProducts(arrayProduct) {
    for (product of arrayProduct){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', () => toggleElement(productDetail, cartAsideMenu, desktopMenu, mobileMenu));
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + parseFloat(product.price);
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }   
}

renderProducts(productList);