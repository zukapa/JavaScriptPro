URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
URN = '/catalogData.json'

const getDataAPI = (url, callback) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(xhr.responseText);
                resolve();
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    });
}

class Product {
    constructor({product_name = 'Empty', price = 0}) {
        this.product_name = product_name;
        this.price = price;
    }
    
    render() {
        return `<div class="products-item">
                    <img class=product-image></img>
                    <h4>${this.product_name}</h4>
                    <p>${this.price}</p>
                </div>`;
    }
}

class Products {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return getDataAPI(`${URL}${URN}`, (products) => {
            this.products = JSON.parse(products);
        })
    }

    calculationTotalCost() {
        return this.products.reduce((accumulator, product) => Object.keys(product).length === 0 ? accumulator : accumulator += product.price, 0);
    }

    render() {
        let productsHtml = '';
        this.products.map(product => {
            const productItem = new Product(product);
            productsHtml += productItem.render();
        });
        document.querySelector('.products-list').innerHTML = productsHtml;
    }
}

const productsShop = new Products();
productsShop.getProducts().then(() => {
    productsShop.render();
})
