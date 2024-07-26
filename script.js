URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
URN = '/catalogData.json'

const { createApp } = Vue

createApp({
    data() { 
        return {
            products: [],
            filteredProducts: [],
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
    },

    mounted() {
        setTimeout(() => {
            this.getDataAPI(`${URL}${URN}`).then(products => {
                this.products = JSON.parse(products);
                this.filteredProducts = this.products;
            });
        }, 3000) 
    }
}).mount('#app')
