<script>
export default {
    data() {
        return {
            itemName: this.$store.state.name,
            itemQuantity: this.$store.state.quantity,
            currentKey: this.$store.state.itemKey
        }
    },

    methods: {
        closePopup() {
            this.$emit('close')
        },
        deleteItem() {
            this.$store.dispatch('deleteItem', this.currentKey)
            this.$emit('close')
        },
        incrementItem() {
            this.$store.dispatch('incrementItem', this.currentKey)
            this.itemQuantity += 1
        },
        decrementItem() {
            if(this.itemQuantity > 1){
                this.$store.dispatch('decrementItem', this.currentKey)
                this.itemQuantity -= 1
            }
        }
    }
}
</script>

<template>
<div class="wrapper">
    <p>{{itemName}} - {{itemQuantity}}</p>
    <button class="red" @click="this.deleteItem">Delete Item</button>
    <button class="green" @click="this.incrementItem">Quantity ++</button>
    <button class="green" @click="this.decrementItem">Quantity --</button>
    <button @click="this.closePopup">Save</button>
</div>
</template>

<style scoped>
.wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
    outline: 3px white solid;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    background-color: var(--peach);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.wrapper * {
    color: black;
    margin-bottom: .5rem;
}
.wrapper > p {
    grid-column: 1 / 3;
    text-align: center;
    font-weight: bold;
}
.wrapper > button {
    color: white;
    padding: .25rem;
    background-color: var(--blue);
}
.wrapper > button:first-of-type {
    grid-column: 1 / 3;
}
.wrapper > button:nth-of-type(2), .wrapper > button:nth-of-type(4) {
    margin-right: .25rem;
}
.wrapper > button:last-of-type {
    color: var(--peach);
    grid-column: 1 / 3;
}
</style>