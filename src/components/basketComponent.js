import { BASE_URL, URL_BASKET, URN_BASKET} from '../constants.js'

export const basketComponent = {
    props: ['changeVisibleBasket', 
            'getBasket',
            'deleteFromBasket'],

    data() {
        return {
            basket: []
        }
    },

    mounted() {
        this.getBasket(`${BASE_URL}${URL_BASKET}${URN_BASKET}`).then(basket => {
            this.basket = JSON.parse(basket);
        });
    },

    template: `
        <div class="basket">
            <p class="header-basket">Basket</p>
            <basket-products-component class="basket-products-item" v-for="product in this.basket" :good="product" :delete-product-from-basket="deleteFromBasket"></basket-products-component>
            <button-shop @button-action="changeVisibleBasket" class="basket-close-button">Close</button-shop>
        </div>`
}
