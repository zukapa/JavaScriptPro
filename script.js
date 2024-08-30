URL_PRODUCTS = ''
URN_PRODUCTS = '/catalog'
URL_BASKET = ''
URN_BASKET = '/basket'
URL_ADD_TO_BASKET = ''
URN_ADD_TO_BASKET = '/addToBasket'
URL_DELETE_FROM_BASKET = ''
URN_DELETE_FROM_BASKET = '/deleteFromBasket'

const { createApp } = Vue

const app = createApp({
    data() { 
        return {
            products: [],
            searchLine: '',
            isVisibleCart: false
        }
    },

    methods: {
        getDataAPI(url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        resolve(xhr.responseText);
                    }
                }
                xhr.open('GET', url, true);
                xhr.send();
            });
        },

        postDataAPI(url, data) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        resolve(xhr.responseText);
                    }
                }
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                xhr.send(JSON.stringify(data));
            });
        },

        calculationTotalCost() {
            return this.products.reduce((accumulator, product) => Object.keys(product).length === 0 ? accumulator : accumulator += product.price, 0);
        },

        changeVisibleBasket() {
            this.isVisibleCart =! this.isVisibleCart;
        }
    },

    computed: {
        filteredProducts() {
            return this.products.filter(({ product_name }) => {
                const regExp = new RegExp(this.searchLine, 'i');
                return regExp.test(product_name)
            })
        }
    },

    mounted() {
        setTimeout(() => {
            this.getDataAPI(`${URL_PRODUCTS}${URN_PRODUCTS}`).then(products => {
                this.products = JSON.parse(products);
                this.filteredProducts = this.products;
            });
        }, 3000) 
    }
})

app.component('product-component', {
    props: ['good',
            'postIntoBasketProduct'],

    data() {
        return {
            product: {}
        }
    },

    methods: {
        postIntoBasket() {
            this.postIntoBasketProduct(`${URL_ADD_TO_BASKET}${URN_ADD_TO_BASKET}`, this.product).then(result => {
                console.log(result);
            });
        }
    },

    mounted() {
        this.product = {
            "id_product": this.good.id_product,
        }
    },

    template: `
        <div>
            <img class=product-image></img>
            <h4>{{ good.product_name }}</h4>
            <p>{{ good.price }}</p>
            <button-shop @button-action="postIntoBasket" class="product-into-basket-button">Into a basket</button-shop>
        </div>`
})

app.component('products-component', {
    props: ['products',
            'postIntoBasket'],

    template: `
        <product-component class="products-item" v-for="product in products" :good="product" :post-into-basket-product="postIntoBasket"></product-component>`
})

app.component('search-component', {
    props: ['modelValue'],

    emits: ['update:modelValue'],

    template: `
        <div class="search-line">
            <input class="search-line-item" type="text" placeholder="Search" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        </div>`
})

app.component('basket-products-component', {
    props: ['good',
            'deleteProductFromBasket'],

    data() {
        return {
            product: {}
        }
    },

    methods: {
        deleteFromBasket() {
            this.deleteProductFromBasket(`${URL_DELETE_FROM_BASKET}${URN_DELETE_FROM_BASKET}`, this.product).then(result => {
                console.log(result);
            });
        }
    },

    mounted() {
        this.product = {
            "id_product": this.good.id_product,
        }
    },

    template: `
        <div>
            <p class="basket-product-info">Product: {{ good.product_name }};</p>
            <p class="basket-product-info">count: {{ good.count }}</p>
            <button-shop @button-action="deleteFromBasket" class="delete-from-basket-button">Delete</button-shop>
        </div>`
})

app.component('basket-component', {
    props: ['changeVisibleBasket', 
            'getBasket',
            'deleteFromBasket'],

    data() {
        return {
            basket: []
        }
    },

    mounted() {
        this.getBasket(`${URL_BASKET}${URN_BASKET}`).then(basket => {
            this.basket = JSON.parse(basket);
        });
    },

    template: `
        <div class="basket">
            <p class="header-basket">Basket</p>
            <basket-products-component class="basket-products-item" v-for="product in this.basket" :good="product" :delete-product-from-basket="deleteFromBasket"></basket-products-component>
            <button-shop @button-action="changeVisibleBasket" class="basket-close-button">Close</button-shop>
        </div>`
})

app.component('button-shop', {
    template: `
        <button @click="$emit('button-action')" type="button"><slot /></button>`
})

app.mount('#app')
