const products = [
    {title: 'Bread', price: 30},
    {title: 'Milk', price: 10},
    {title: 'Wafer', price: 30},
    {title: 'Sugar', price: 40},
    {title: 'Tea', price: 50},
    {}
];

const renderProductsItem = ({title = 'Empty', price = 0}) => {
    return `<div class="products-item">
                <img class=product-image></img>
                <h4>${title}</h4>
                <p>${price}</p>
            </div>`;
};

const renderProductsList = (list=[{title: 'Empty', price: 0}]) => {
    document.querySelector('.products-list').innerHTML =
        list.map(item => renderProductsItem(item)).join('');
        list.map(item => renderProductsItem(item)).join('');
}

renderProductsList(products);
