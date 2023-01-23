import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            foods: [
                {breakfast: [
                    {img: 'https://w7.pngwing.com/pngs/738/986/png-transparent-bread-with-red-sauce-roti-canai-parotta-paratha-indian-cuisine-vegetarian-cuisine-veg-biryani-food-recipe-cuisine.png', alt: 'Parota', id:1, price: 1.00},
                    {img: 'https://www.nicepng.com/png/detail/252-2522193_south-indian-masala-dosa-images-png.png', alt: 'Masala Dosa', id:2, price: 2.50},
                    {img: 'https://img.freepik.com/premium-photo/chapati-tanturi-roti_57665-11320.jpg?w=2000', alt: 'Roti', id:3, price: 1.00},
                    {img: 'https://img.freepik.com/premium-photo/south-indian-vada-medu-vada-dal-vadai-plate-bowl-isolated-plain_466689-1580.jpg', alt: 'Vada', id:4, price: 0.50},
                    {img: 'https://img.freepik.com/premium-photo/dosa-ghee-roast-dosa-cone-shaped-famous-south-indian-breakfast-item-which-is-made-caste-iron-pan_527904-2881.jpg', alt: 'Ghee Roast', id:5, price: 2.00},
                    {img: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/09/Indian-Basmati-Rice-683x1024.webp', alt: 'Basmati Rice', id:6, price: 6.00},
                    {img: 'https://w7.pngwing.com/pngs/699/645/png-transparent-dal-makhani-indian-cuisine-chana-masala-aloo-gobi-others-soup-food-recipe.png', alt: 'Dal Fry', id:7, price: 10.00},
                    {img: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/09/Indian-Spicy-Minced-Meat-Kheema-683x1024.webp', alt: 'Keema', id: 8, price: 7.00},
                    {img: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/09/Indian-Snack-Papri-Chat-683x1024.webp', alt: 'Chaat', id: 9, price: 1.00},
                    {img: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/09/Bowl-of-Indian-Samosa-683x1024.webp', alt: 'Samosa', id: 10, price: 1.00},
                    {img: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/09/Indian-Rasgulla-Dessert-683x1024.webp', alt: 'Rasagulla', id:11, price: 2.00},
                    {img: 'https://thepanipurihub.com///images/website/menu/sev-puri-near-me-restaurent.png', alt: 'Pani Puri', id: 12, price: 1.00},
                    {img: 'https://banner2.cleanpng.com/20190705/kga/kisspng-rava-idli-sambar-south-indian-cuisine-mr-idli-investment-opportunity-india-5d1f2fd0cc96a7.255009801562324944838.jpg', alt: 'Idli', id: 13, price: 0.50},
                    {img: 'https://w7.pngwing.com/pngs/465/1011/png-transparent-cup-of-coffee-green-tea-masala-chai-tea-tea-teacup-herbal-tea.png', alt: 'Chai', id: 14, price: 1.50},
                ]},
                {biriyani: [
                    {img: 'https://www.kindpng.com/picc/m/709-7090682_hyderabadi-biriyani-hd-png-download.png', alt: 'Veg BR', price: 9.00, id: 15},
                    {img: 'https://angtnonions.com/wp-content/uploads/2015/12/Fish-Biryani.jpg', alt: 'Fish BR', price: 16.00, id: 16},
                    {img: 'https://w7.pngwing.com/pngs/134/682/png-transparent-paradise-hotel-hyderabadi-biryani-hyderabadi-cuisine-indian-cuisine-kerala-biriyani-food-recipe-cuisine.png', alt: 'Chicken BR', price: 14.00, id: 17},
                    {img: 'https://toppng.com/uploads/preview/chicken-biryani-beef-biryani-images-115628804097ejmsrqes4.png', alt: 'Beef BR', price: 14.00, id: 18},
                    {img: 'https://toppng.com/uploads/preview/mutton-biriyani-recipe-from-our-chef-chicken-biryani-images-11563048170hrw1a7thlo.png', alt: 'Mutton BR', price: 14.00, id: 18},
                    {img: 'https://img.favpng.com/2/17/23/biryani-pasta-risotto-pilaf-vegetarian-cuisine-png-favpng-9RFf3zFkbhHFLprPEZrvGM4J1.jpg', alt: 'Prawns BR', price: 15.00, id: 19},
                    {img: 'https://w7.pngwing.com/pngs/134/682/png-transparent-paradise-hotel-hyderabadi-biryani-hyderabadi-cuisine-indian-cuisine-kerala-biriyani-food-recipe-cuisine.png', alt: 'Chicken Tikka BR', price: 17.00, id: 20},
                    {img: 'https://d1n5l80rwxz6pi.cloudfront.net/general/rice-products.webp', alt: 'Barik Set', price: 11.00, id: 21}
                ]},
                {chinese: [
                    {img: 'https://img.favpng.com/3/23/4/gobi-manchurian-indian-chinese-cuisine-chilli-chicken-png-favpng-3sLvAdWXLUjkrkg5JJ0b1X7bg.jpg', alt: 'Chilli Chicken', price: 10.00, id: 22},
                    {img: 'https://e7.pngegg.com/pngimages/230/857/png-clipart-gobi-manchurian-indian-cuisine-indian-chinese-cuisine-butter-chicken-cauliflower-food-recipe.png', alt: 'Chicken Manchurian', price: 13.00, id: 23},
                    {img: 'https://www.antoskitchen.com/wp-content/uploads/2017/01/FISH-MANCHURIAN.jpg', alt: 'Fish Machurain', price: 14.50, id: 24},
                    {img: 'https://www.nicepng.com/png/detail/696-6961635_chilli-paneer-png.png', alt: 'Panner Manchurain', price: 10.00, id: 25},
                    {img: 'https://cdn2.foodviva.com/static-content/food-images/chinese-recipes/mushroom-manchurian-recipe/mushroom-manchurian-recipe.jpg', alt: 'Gobi Mushroom', price: 9.50, id: 26},
                    {img: 'https://e7.pngegg.com/pngimages/689/712/png-clipart-chicken-65-tandoori-chicken-biryani-indian-cuisine-chicken-food-animals.png', alt: 'Chicken 65', price: 8.00, id: 27},
                    {img: 'http://3.bp.blogspot.com/-DCD_xqJQ8qE/U7maR8IEK0I/AAAAAAAAIWA/2AXJOin7ARA/s1600/image001-782648.png', alt: 'Panner 65', price: 8.00, id: 28},
                    {img: 'https://e7.pngegg.com/pngimages/958/963/png-clipart-hot-and-sour-soup-hot-and-sour-noodle-sweet-potato-powder-mala-sauce-home-spicy-sweet-potato-powder-soup-food.png', alt:'Hot & Sour Soup', price: 10.00, id: 29},
                    {img: 'https://e7.pngegg.com/pngimages/623/937/png-clipart-corn-soup-mixed-vegetable-soup-manchow-soup-hot-and-sour-soup-vegetable-soup-food.png', alt: 'Veg Soup', price: 8.00, id: 30},
                    {img: 'https://www.kindpng.com/picc/m/52-522859_hot-n-sour-chicken-soup-png-transparent-png.png', alt: 'Chicken Soup', price: 12.00, id: 31},
                    {img: 'https://www.kindpng.com/picc/m/15-153463_sweet-corn-mutton-soup-hd-png-download.png', alt: 'Mutton Soup', price: 12.00, id: 32},
                    {img: 'https://w7.pngwing.com/pngs/47/72/png-transparent-congee-corn-soup-hot-and-sour-soup-manchow-soup-mixed-vegetable-soup-vegetable-soup-food-recipe.png', alt: 'Sweet Corn Soup', price: 8.00, id: 33}
                ]},
                {pasta: [
                    {img: 'https://w7.pngwing.com/pngs/112/709/png-transparent-chicken-curry-pasta-bolognese-sauce-food-pasta-animals-recipe-chicken-meat.png', alt: 'Chicken Pasta', price: 15.00, id: 34},
                    {img: 'https://www.kindpng.com/picc/m/709-7090504_chunky-tomato-sauce-pasta-clipart-of-pasta-with.png', alt: 'Veg Pasta', price: 13.50, id: 35},
                    {img: 'https://www.pngitem.com/pimgs/m/37-371369_fully-cook-to-160-degrees-farenheit-internal-temperature.png', alt: 'Beef Pasta', price: 16.00, id: 36}
                ]},
                {fried: [
                    {img: 'https://w7.pngwing.com/pngs/403/18/png-transparent-mcdonald-s-chicken-mcnuggets-empanada-fried-chicken-chicken-nugget-express-box.png', alt: 'Mini CHKN Box', price: 14.00, id: 37},
                    {img: 'https://t4.ftcdn.net/jpg/02/05/05/79/360_F_205057951_zshtyOjtZPI0OcdtNNTU6yd9l2iGm5Gb.jpg', alt: 'Large CHKN Box', price: 18.00, id: 38},
                    {img: 'https://www.freepnglogos.com/uploads/fried-chicken-png/image-fried-chicken-fantendo-nintendo-fanon-wiki-36.png', alt: 'Family CHKN Box', price: 26.00, id: 39}
                ]},
                {burger: [
                    {img: 'https://images.deliveryhero.io/image/talabat/Menuitems/Jumbo_Prawns_Combo637894386229837274.jpg', alt: 'Jumbo Prawns Combo', price: 12.00, id: 40},
                    {img: 'https://images.deliveryhero.io/image/talabat/Menuitems/Zinker_Combo_(900100_637724834472105653.jpg', alt: 'Zinker Combo', price: 10.00, id: 41},
                    {img: 'https://img.favpng.com/4/17/1/whopper-tendercrisp-chicken-sandwich-burger-king-specialty-sandwiches-chicken-fingers-png-favpng-aFHUpMFxA5YL3vxyJkfqw9Ldr_t.jpg', alt: 'Nuggets Combo', price: 14.50, id: 42},
                    {img: 'https://5.imimg.com/data5/CN/EO/GLADMIN-52687626/chicken-tikka-sandwiches-500x500.png', alt: 'Chicken Tikka Combo', price: 12.00, id: 43},
                    {img: 'https://w7.pngwing.com/pngs/497/544/png-transparent-whopper-hamburger-big-king-chicken-nugget-chicken-fingers-burger-king-food-recipe-chicken-meat.png', alt: 'Chicken Burger', price: 10.00, id: 44},
                    {img: 'https://www.seekpng.com/png/detail/244-2446189_tandoori-chicken-patty.png', alt: 'Chicken Tikka Burger', price: 14.50, id: 45},
                    {img: 'https://w7.pngwing.com/pngs/996/467/png-transparent-cheeseburger-hamburger-salmon-burger-mcdonald-s-big-mac-whopper-shrimp.png', alt: 'Prawns Burger', price: 12.50, id: 46},
                    {img: 'https://w7.pngwing.com/pngs/369/24/png-transparent-hamburger-chicken-sandwich-veggie-burger-fast-food-burger-king-food-recipe-fast-food-restaurant.png', alt: 'Beef Burger', price: 13.00, id: 47},
                    {img: 'https://www.seekpng.com/png/detail/892-8929260_spicy-paneer-burger-veg-cheese-burger.png', alt: 'Panner Cheese Burger', price: 12.00, id: 48}
                ]},
                {juice: [
                    {img: 'https://img.favpng.com/18/9/25/ice-cream-smoothie-milkshake-juice-fizzy-drinks-png-favpng-cwsVgR6hTpDSx3ws2YKH5BLhM.jpg', alt: 'Strawberry Milkshake', price: 10.00, id: 49},
                    {img: 'https://photoshop-kopona.com/uploads/posts/2019-04/1555871805_fruit-juice-002_apple.jpg', alt: 'Apple Juice', price: 8.50, id: 50},
                    {img: 'https://img.favpng.com/13/15/6/ice-cream-milkshake-smoothie-juice-mango-png-favpng-hyWw98fHiknERNkKZs1pXg4VY.jpg', alt: 'Mango Milkshake', price: 12.00, id: 51},
                    {img: 'https://www.nicepng.com/png/detail/62-629984_falooda-png.png', alt: 'Falooda', price: 12.00, id: 52},
                    {img: 'https://www.pikpng.com/pngl/b/555-5559039_ice-cream-vector-ice-cream-glass-ice-cream.png', alt: 'Mixed Ice Cream', price: 15.00, id: 53}
                ]}
            ],
            orderList: [],
            name: '',
            quantity: 0,
            itemKey: 0
        }
    },
    mutations: {
        deleteItem(state, key) {
            const index = state.orderList.findIndex(order => order.id === key)
            if(index > -1){
                state.orderList.splice(index, 1);
            }
        },
        incrementItem(state, key){
            const index = state.orderList.findIndex((order => order.id === key))
            state.orderList[index].quantity += 1
        },
        decrementItem(state, key){
            const index = state.orderList.findIndex((order => order.id === key))
            state.orderList[index].quantity -= 1
        },
        addnew(state, pre){
            state.orderList.push({name: pre.name, quantity: 1, price: pre.price})
        },
        incQuantity(state, idx){
            state.orderList[idx].quantity += 1
        }
    },
    actions: {
        deleteItem({commit}, key) {
            commit('deleteItem', key)
        },
        incrementItem({commit}, key) {
            commit('incrementItem', key)
        },
        decrementItem({commit}, key){
            commit('decrementItem', key)
        },
        addnewitem({commit, state}, preference){
            console.log('Price - ' + preference.price)
            const index = state.orderList.findIndex((order => order.name === preference.name))
            if(index > -1){
                commit('incQuantity', index)
            } else {
                commit('addnew', {name: preference.name, price: preference.price})
            }
        },
        cancelTicket({state}) {
            state.orderList = []
        }
    }
})

createApp(App).use(router).use(store).mount('#app')
