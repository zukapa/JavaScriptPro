export const searchComponent = {
    props: ['modelValue'],

    emits: ['update:modelValue'],

    template: `
        <div class="search-line">
            <input class="search-line-item" type="text" placeholder="Search" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        </div>`
}
