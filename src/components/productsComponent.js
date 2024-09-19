export const productsComponent = {
    props: ['products',
            'postIntoBasket'],

    template: `
        <product-component class="products-item" v-for="product in products" :good="product" :post-into-basket-product="postIntoBasket"></product-component>`
}
