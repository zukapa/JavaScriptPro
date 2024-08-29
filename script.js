URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
URN = '/catalogData.json'

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
            this.getDataAPI(`${URL}${URN}`).then(products => {
                this.products = JSON.parse(products);
                this.filteredProducts = this.products;
            });
        }, 3000) 
    }
})

app.component('product-component', {
    props: ['good'],
    template: `
        <div class="product-item">
            <img class=product-image></img>
            <h4>{{ good.product_name }}</h4>
            <p>{{ good.price }}</p>
        </div>`
})

app.component('products-component', {
    props: ['products'],
    template: `
        <product-component class="products-item" v-for="product in products" :good="product"></product-component>`
})

app.component('search-component', {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    template: `
        <div class="search-line">
            <input class="search-line-item" type="text" placeholder="Search" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        </div>`
})

app.component('basket-component', {
    props: ['visibleBasket'],
    template: `
        <div v-if="visibleBasket" class="basket">
            <p class="header-basket">Basket</p>
            <button @click="$emit('change-visible-basket')" class="basket-close-button">Close</button>
        </div>`
})

app.component('button-basket-component', {
    template: `
        <button @click="$emit('change-visible-basket')" class="basket-button menu-button" type="button"><slot /></button>`
})

app.mount('#app')
