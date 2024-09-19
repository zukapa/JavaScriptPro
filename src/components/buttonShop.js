export const buttonShop = {
    template: `
        <button @click="$emit('button-action')" type="button"><slot /></button>`
}
