import { BASE_URL, URL_DELETE_FROM_BASKET, URN_DELETE_FROM_BASKET} from '../constants.js'

export const basketProductsComponent = {
    props: ['good',
            'deleteProductFromBasket'],

    data() {
        return {
            product: {}
        }
    },

    methods: {
        deleteFromBasket() {
            this.deleteProductFromBasket(`${BASE_URL}${URL_DELETE_FROM_BASKET}${URN_DELETE_FROM_BASKET}`, this.product).then(result => {
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
}
