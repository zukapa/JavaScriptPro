const products = [
    {title: 'bread', price: 3},
    {title: 'milk', price: 1},
    {title: 'wafer', price: 3},
    {title: 'sugar', price: 4},
    {title: 'tea', price: 5},
];

const renderProductsItem = (title, price) => {
    return `<div class="products-item">
                <h4>${title}</h4>
                <p>${price}</p>
            </div>`;
};

const renderProductsList = (list) => {
    document.querySelector('.products-list').innerHTML =
        list.map(item => renderProductsItem(item.title, item.price)).join('');
}

renderProductsList(products);
