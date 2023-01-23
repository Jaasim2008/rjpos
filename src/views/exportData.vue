<script>
import downLoad from '../components/downLoad.vue'
export default {
    data() {
        return {
            href: 'test',
            isReady: false
        }
    },
    created() {
        if(this.$store.state.orderList == 0){
            alert('orderlist is Empty! Redirecting back..')
            this.$router.push({name: 'home'})
        }
    },
    methods: {
        async download() {
            const el = this.$refs.download;
            const opt = {
                type: 'dataURL'
            };
            const printCanvas = await html2canvas(el, opt);
            const link = document.createElement('a');
            link.setAttribute('download', 'export.png');
            link.setAttribute(
                'href',
                printCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            );
            link.click()
        }
    },
    components: {
        downLoad
    },
    errorCaptured(err) {
        console.error(err)
    }
}
</script>

<template>
    <downLoad :href="this.href" v-if="this.isReady"/>
    <div class="wrapper">
        <div>
            <h1>Export Ticket</h1>
            <div ref="download" class="download">
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
            <button @click="this.download">Download as Image</button>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: var(--blue);
    height: 100vh;
    width: 100vw;
}
.wrapper > div {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
h1 {
    text-align: center;
    text-decoration: underline;
    font-size: 4vw;
}
table, td, th {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    border-spacing: 10px;
}
button {
    cursor: pointer;
    text-align: center;
    background-color: var(--yellow);
    color: black;
    padding: .25rem;
    margin: .5rem;
    transition: background-color .5s, color .5s;
}
button:hover {
    background-color: var(--blue);
    color: white;
}
.download {
    background-color: var(--blue);
    color: black !important;
}
</style>