import './style.css'
import { BASE_URL, URL_PRODUCTS, URN_PRODUCTS} from './constants.js'
import { productComponent } from './components/productComponent'
import { productsComponent } from './components/productsComponent'
import { searchComponent } from './components/searchComponent'
import { basketProductsComponent } from './components/basketProductsComponent'
import { basketComponent } from './components/basketComponent'
import { buttonShop } from './components/buttonShop'


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
            this.getDataAPI(`${BASE_URL}${URL_PRODUCTS}${URN_PRODUCTS}`).then(products => {
                this.products = JSON.parse(products);
                this.filteredProducts = this.products;
            });
        }, 3000) 
    }
})

app.component('product-component', productComponent)

app.component('products-component', productsComponent)

app.component('search-component', searchComponent)

app.component('basket-products-component', basketProductsComponent)

app.component('basket-component', basketComponent)

app.component('button-shop', buttonShop)

app.mount('#app')
