import { BASE_URL, URL_ADD_TO_BASKET, URN_ADD_TO_BASKET} from '../constants.js'

export const productComponent = {
    props: ['good',
            'postIntoBasketProduct'],

    data() {
        return {
            product: {}
        }
    },

    methods: {
        postIntoBasket() {
            this.postIntoBasketProduct(`${BASE_URL}${URL_ADD_TO_BASKET}${URN_ADD_TO_BASKET}`, this.product).then(result => {
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
}
