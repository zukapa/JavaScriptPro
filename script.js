const products = [
    {title: 'Bread', price: 30},
    {title: 'Milk', price: 10},
    {title: 'Wafer', price: 30},
    {title: 'Sugar', price: 40},
    {title: 'Tea', price: 50},
    {}
];

class Product {
    constructor({title = 'Empty', price = 0}) {
        this.title = title;
        this.price = price;
    }
    
    render() {
        return `<div class="products-item">
                    <img class=product-image></img>
                    <h4>${this.title}</h4>
                    <p>${this.price}</p>
                </div>`;
    }
}

class Products {
    constructor() {
        this.products = [];
    }

    getProducts() {
        this.products = products;
    }

    calculationTotalCost() {
        let totalCost = 0;
        this.products.map(product => Object.keys(product).length === 0 ? totalCost : totalCost += product.price);
        return totalCost;
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
productsShop.getProducts();
productsShop.render();
