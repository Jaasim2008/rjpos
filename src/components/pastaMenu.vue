<script>
export default {
    methods: {
        foodSelect(name, price) {
            this.$store.dispatch('addnewitem', {name: name, price: price})
        }
    }
}
</script>

<template>
    <div class="food-wrapper">
        <div class="food" v-for="item in this.$store.state.foods[3].pasta" :key="item.id">
            <img v-bind:src="item.img" v-bind:alt="item.alt" @click="this.foodSelect(item.alt, item.price)">
            <p>{{item.alt}} ({{item.price}})</p>
        </div>
    </div>
</template>

<style scoped>
.food-wrapper {
    margin-top: .5rem;
    margin-left: .5rem;
    display: grid;
    justify-content: space-around;
    grid-template-columns: auto auto auto;
    gap: .5rem;
}
.food > img {
    outline: 2px white solid;
    width: 8vw;
    height: 8vw;
}
.food > p {
    text-align: center;
    font-size: 1.125vw;
}
</style>