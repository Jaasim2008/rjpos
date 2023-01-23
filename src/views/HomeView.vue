<script>
import itemPop from '../components/itemPopup.vue'
import breakfastMenu from '../components/breakfastMenu.vue'
import biriyaniMenu from '../components/biriyaniMenu.vue'
import chineseMenu from '../components/chineseMenu.vue'
import pastaMenu from '../components/pastaMenu.vue'
import friedMenu from '../components/friedMenu.vue'
import burgerMenu from '../components/burgerMenu.vue'
import juiceMenu from '../components/juiceMenu.vue'
export default {
  data() {
    return {
      isPopupShowing: false,
      timenow: 0,
      ticketnum: 0,
      currentFoodSel: 0,
      isShowing: {breakfast: false, biriyani: false, chinese: false, pasta: false, fried: false, burger: false, juice: false}
    }
  },

  created() {
    console.log(screen.width)
      setInterval(this.updateDate, 1000)
  },

  methods: {
    updateDate() {
    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var now = new Date();

    this.timenow = days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getSeconds() +":" + now.getMinutes() + ":" + now.getHours();
    },
    cancelTicket() {
      this.$store.dispatch('cancelTicket')
    },
    isShowingR(name){
      if(name == 'br'){
        return this.isShowing.breakfast
      } else if (name == 'bi') {
        return this.isShowing.biriyani
      } else if (name == 'ch') {
        return this.isShowing.chinese
      } else if (name == 'ps') {
        return this.isShowing.pasta
      } else if (name == 'fr') {
        return this.isShowing.fried
      } else if (name == 'bg') {
        return this.isShowing.burger
      } else {
        return this.isShowing.juice
      }
    },
    changeColor(name) {
      for(let [key] of Object.entries(this.isShowing)){
        this.isShowing[key] = false
      }
      for(let [key] of Object.entries(this.isShowing)){
        if(key != name){
        this.isShowing[key] = true
        }
      }
    },
    export() {
      if(this.$store.state.orderList.length != 0){
        this.$router.push({ name: 'export' });
      } else {
        alert('orderlist is Empty!')
      }
    }
  },

  components: {
    itemPop,
    breakfastMenu,
    biriyaniMenu,
    chineseMenu,
    pastaMenu,
    friedMenu,
    burgerMenu,
    juiceMenu
  }
}
</script>

<template>
  <itemPop v-if="isPopupShowing" @close="isPopupShowing = false"></itemPop>
  <div class="body">
    <div class="food">
      <div class="food-header">
        <p><b>JazzRes </b><i>{{timenow}}</i></p>
      </div>
      <div class="food-sel">
        <div class="food-menu">
          <ul>
            <li @click="(this.changeColor('breakfast'), currentFoodSel = 1)" :class="{ selected: !this.isShowingR('br') }">Breakfast</li>
            <li @click="(this.changeColor('biriyani') ,currentFoodSel = 2)" :class="{ selected: !this.isShowingR('bi') }">Biriyani</li>
            <li @click="(this.changeColor('chinese'), currentFoodSel = 3)" :class="{ selected: !this.isShowingR('ch') }">Chinese</li>
            <li @click="(this.changeColor('pasta'), currentFoodSel = 4)" :class="{ selected: !this.isShowingR('ps') }">Pasta</li>
            <li @click="(this.changeColor('fried'), currentFoodSel = 5)" :class="{ selected: !this.isShowingR('fr') }">Fried</li>
            <li @click="(this.changeColor('burger'), currentFoodSel = 6)" :class="{ selected: !this.isShowingR('bg') }">Burger/Sandwhich</li>
            <li @click="(this.changeColor('juice'), currentFoodSel = 7)" :class="{ selected: !this.isShowingR('jc') }">Juices</li>
          </ul>
        </div>
        <div class="food-item">
          <breakfastMenu v-if="currentFoodSel == 1" />
          <biriyaniMenu v-if="currentFoodSel == 2" />
          <chineseMenu v-if="currentFoodSel == 3"/>
          <pastaMenu v-if="currentFoodSel == 4"/>
          <friedMenu v-if="currentFoodSel == 5"/>
          <burgerMenu v-if="currentFoodSel == 6"/>
          <juiceMenu v-if="currentFoodSel == 7"/>
        </div>
      </div>
    </div>
    <div class="ticket">
      <div class="ticket-wrapper">
        <div class="ticket-head">Ticket No - {{ticketnum}}</div>
        <div class="ticket-list">
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
        <div class="ticket-opt">
          <button @click="this.cancelTicket">Cancel Ticket</button>
          <button @click="this.export">Submit Ticket</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--blue);
}
.food {
  width: 70vw;
}
.ticket {
  width: 30vw;
  background-color: var(--yellow);
}
.food-header {
  height: 7vh;
  width: 100%;
  background-color: var(--peach);
}
.food-header * {
  color: black !important;
}
.food-header > p > b{
  font-size: 1.875vw !important;
}
.food-header > p > i {
  margin-right: 1rem;
  float: right;
  font-size: 1.563vw;
}
.ticket-wrapper {
  margin-left: .5rem;
  margin-right: .5rem;
}
.ticket-head {
  height: 7vh;
  text-align: center;
  font-style: italic;
}
.ticket-list {
  overflow-y: scroll;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 25vw;
  outline: 0.125vw white solid;
  background-color: var(--blue);
  height: 70vh;
}
.ticket-list * {
  font-size: 1.563vw;
}
.ticket-list > table, th, td{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-spacing: 1px;
}
.ticket-opt {
  height: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.ticket-opt > button {
  margin-top: 1rem;
  background-color: var(--blue);
  padding: .25rem;
  font-size: 1.875vw;
}
.ticket-opt > button:first-of-type {
  margin-right: .25rem;
}
.ticket-opt > button:nth-child(2) {
  color: greenyellow;
}
.ticket-opt > button:nth-child(1) {
  color: red;
}
th {
  border-bottom: 1px var(--yellow) solid;
}
.food-sel {
  display: flex;
  justify-content: flex-start;
}
.food-menu {
  outline: 0.125vw white solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20vw;
  height: calc(100vh - 7vh);
  background-color: var(--peach);
}
.food-menu * {
  color: black;
  font-weight: bold;
  font-size: 1.875vw;
}
.food-menu > ul > li {
  border-bottom: 2px white solid;
  padding: .25rem;
}
.food-menu > ul > li:first-of-type {
  border-top: 2px white solid;
}
.food-item {
  width: 100%;
  height: calc(100vh - 7vh);
  overflow-y: scroll;
  overflow-x: scroll;
}
.selected {
  background-color: yellowgreen;
  color: white !important;
}
</style>