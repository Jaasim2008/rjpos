<script>
export default {
    props: ['href']
}
</script>

<template>
    <div class="wrapper2">Downloadable Image 👇</div>
    <div ref="downloadable">
    <table>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
        <tr v-for="item in this.$store.state.orderList" :key="item.id" @click="(isPopupShowing = true, this.$store.state.name = item.name, this.$store.state.quantity = item.quantity, this.$store.state.itemKey = item.id)">
            <td>{{item.name}}</td>
            <td>{{item.quantity}}</td>
            <td>{{item.price*item.quantity}}</td>
        </tr>
    </table>
    </div>
</template>

<style scoped>
    .wrapper2 {
        border: 2px white solid;
        padding: .5rem;
        background-color: var(--yellow);
        z-index: 9;
        position: fixed;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
    }
</style>