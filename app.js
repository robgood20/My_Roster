function getElem(id) {
    return document.getElementById(id);
}



/*
var cart = {
    products: {},
    clear: function () {
        this.products = {}
    },
    addProduct: function (product) {
        //GOAL:: Lets map the ^^ product that comes in from our store. To the product in the cart. If the product already exist then update the quantity only
       
        var alreadyInCart = hasProp(cart.products, product.id);

        var productToAdd;

        if (alreadyInCart) {
            productToAdd = alreadyInCart;
        } else {
            productToAdd = {
                title: product.title,
                url: product.url,
                price: product.price,
                quantity: 0
            }
        }
        productToAdd.quantity++;

        this.products[product.id] = productToAdd;
    }
}
*/
var products = [];
var store = {
    products: []
}
var productListElem = document.getElementById('product-list');

function Product(title, price, url, inStock) {
    function Product(id, title, price, url, quantity) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.url = url;
        this.inStock = inStock;
        this.quantity = quantity;

        products.push(this);
        this.inStock = function () {
            //bad code remove it later
      
            if (this.quantity <= 0) {
                var elem = $('div.product[id="' + this.id + '"]');
                elem.addClass('out-of-stock');
            }

            return this.quantity > 0;
        }

        store.products.push(this);

    }

    var fishingPotty = new Product('The Fishing Potty', 100, 'http://www.stupid.com/thumbnail.asp?file=assets/images/HKLINE_11.jpg&maxx=400&maxy=0', 50);
    var fishingPotty = new Product(1, 'The Fishing Potty', 100, 'http://www.stupid.com/thumbnail.asp?file=assets/images/HKLINE_11.jpg&maxx=400&maxy=0', 5);

    var baconFrosting = new Product('Bacon Frosting Yum!', 10, 'http://www.stupid.com/thumbnail.asp?file=assets/images/BACFROS_1.jpg&maxx=400&maxy=0', 200);
    var baconFrosting = new Product(2, 'Bacon Frosting Yum!', 10, 'http://www.stupid.com/thumbnail.asp?file=assets/images/BACFROS_1.jpg&maxx=400&maxy=0', 200);

    var poopPen = new Product('My Poopie Friend', 12, 'http://www.stupid.com/thumbnail.asp?file=assets/images/41yvaacarbl_sy355_.jpg&maxx=400&maxy=0', 1200);
    var vader = new Product(3, 'My Shower Friend', 12, 'http://i1.wp.com/ohthethingsyoucanbuy.com/wp-content/uploads/2015/12/Darth-Vader-Shower-Head.jpg?fit=400,300', 1200);


    for (var i = 0; i < products.length; i++) {
        var currentProduct = products[i];
        for (var i = 0; i < store.products.length; i++) {
            var currentProduct = store.products[i];
            drawProductOnScreen(currentProduct);
        }
  
 
        /*
        +<div id="product.id" class="product">
        +    <h3>product.name</h3>
        +    <p>product.price + shipping & handeling</p>
        +    <img src="product.url" alt="">
        +    <div class="btn-group">
        +    <button class="btn btn-primary">Buy Now</button>
        +    </div>
        +</div>
        +*/
        function drawProductOnScreen(currentProduct) {
            var productElem = document.createElement('div');
            productElem.style.display = 'inline-block'
            productElem.innerHTML = '<h3>' + currentProduct.title + '</h3> <p>$' + currentProduct.price + ' plus shipping and handeling</p> <img src="' + currentProduct.url + '" alt=""><button>Buy Now</button>'
            productElem.className = 'product';
            productElem.id = currentProduct.id;
            productElem.innerHTML = '<h3>' + currentProduct.title + '</h3> <p>$' + currentProduct.price + ' plus shipping and handeling</p> <img src="' + currentProduct.url + '" alt=""><div class="btn-group"><button>Add to Cart</button></div>'
            productListElem.appendChild(productElem)