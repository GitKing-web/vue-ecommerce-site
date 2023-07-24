import { createStore } from "vuex";
import img1 from '../assets/images/16805.jpg';
import img2 from '../assets/images/12966.jpg';
import img3 from '../assets/images/15045.jpg';
import img4 from '../assets/images/27225.jpg';
import img5 from '../assets/images/10307.jpg';
import img6 from '../assets/images/10649.jpg';
import img7 from '../assets/images/12704.jpg';
import img8 from '../assets/images/13028.jpg';

//slides
import image1 from '../assets/images/girls-shopping-png-hd--1133.png';
import image2 from '../assets/images/Shopping-girl-pink-dress_m.jpg';
import image3 from '../assets/images/girl-with-shopping-bags-png--1280.png'

//categories
import cat1 from '../assets/images/29173.jpg';
import cat2 from '../assets/images/24995.jpg';
import cat3 from  '../assets/images/21833.jpg';

const store = createStore({
     state:{
        cart: [],
        products: [
            {
                id: 1,
                img: img1,
                item: 'stuff 1',
                price: 200,
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt sed, nisi dolore id esse laudantium <brId maiores dicta consequatur accusamus, asperiores ab adipisci iusto quisquam, nobis praesentium error aliquam?'
            },
            {
                id: 2,
                img: img2,
                item: 'stuff 2',
                price: 100,
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt sed, nisi dolore id esse laudantium <brId maiores dicta consequatur accusamus, asperiores ab adipisci iusto quisquam, nobis praesentium error aliquam?'
            },
            {
                id: 3,
                img: img3,
                item: 'stuff 3',
                price: 300,
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt sed, nisi dolore id esse laudantium <brId maiores dicta consequatur accusamus, asperiores ab adipisci iusto quisquam, nobis praesentium error aliquam?'
            },
            {
                id: 4,
                img: img4,
                item: 'stuff 4',
                price: 200,
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt sed, nisi dolore id esse laudantium <brId maiores dicta consequatur accusamus, asperiores ab adipisci iusto quisquam, nobis praesentium error aliquam?'
            },
            {
                id: 5,
                img: img5,
                item: 'stuff 5',
                price: 500,
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt sed, nisi dolore id esse laudantium <brId maiores dicta consequatur accusamus, asperiores ab adipisci iusto quisquam, nobis praesentium error aliquam?'
            },
            {
                id: 6,
                img: img6,
                item: 'stuff 6',
                price: 200,
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt sed, nisi dolore id esse laudantium <brId maiores dicta consequatur accusamus, asperiores ab adipisci iusto quisquam, nobis praesentium error aliquam?'
            },
            {
                id: 7,
                img: img7,
                item: 'stuff 7',
                price: 400,
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt sed, nisi dolore id esse laudantium <brId maiores dicta consequatur accusamus, asperiores ab adipisci iusto quisquam, nobis praesentium error aliquam?'
            },
            {
                id: 8,
                img: img8,
                item: 'stuff 8',
                price: 1000,
                desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt sed, nisi dolore id esse laudantium <brId maiores dicta consequatur accusamus, asperiores ab adipisci iusto quisquam, nobis praesentium error aliquam?'
            },
        ],

        slider: [
            {
                id: 1,
                image: image1,
                title: 'SUMMER SALE',
                desc: 'Buy Products at 30% off discount on first purchase'
                 
            },
            {
                id: 2,
                image: image2,
                title: 'AUTUM SALE',
                desc: 'Buy Products at 30% off discount on first purchase'
            },
            {
                id: 3,
                image: image3,
                title: 'POPULAR COLLECTIONS',
                desc: 'Buy Products at 30% off discount on first purchase'
            }
        ],

        categories: [
            {
                id: 1,
                title: 'SUMMER WEARS',
                img: cat1
            },
            {
                id: 2,
                title: 'DENIM SHORTS',
                img: cat2
            },
            {
                id: 3,
                title: 'CASUAL WEARZ',
                img: cat3
            }
        ]
    },
    actions: {
        addToCart: ({ commit, state }, payload) => {
            const product = state.products.find((product) => product.id === payload)
            
        

            // const cart = state.cart.find((cart) => cart.id === product.id)

            if(!product){
                return alert(`product with ${ payload.id } does not exist`)
            }else{
                commit('add_cart', product)
                
            }

        },

        increment: ({commit, state}, payload) => {
            const product = state.products.find(product => product.id === payload)

            if(product){
                commit('increment_', payload)
            }
            else { return alert(`product with ${ payload.id} does not exist`) }
            
        },

        decrement: ({ commit, state}, payload) => {
            const product = state.products.find(product => product.id === payload)

            if(product)
             commit('decrement_', payload)
             
             else alert(`product with ${ payload.id} does not exist`)
        },

        removeFromCart: ({ commit, state}, payload) => {
            const product = state.products.find(product => product.id === payload)

            if(product)
            commit('Remove_fromCart', payload)
            
            else alert(`product with ${ payload.id} does not exist`)
        },

    },

    mutations: {
        add_cart: (state, payload) => {

            const product = state.cart.find(product => product.id === payload.id)

            if(product){

               state.cart = state.cart.map(cart => cart.id === product.id ? { ...cart, quantity: cart.quantity + 1 } : cart)
            }
            else { state.cart.push({ quantity: 1, ...payload}) }  
            
     
        },

        increment_: (state, payload) => {
          state.cart = state.cart.map((cart) => cart.id === payload ? { ...cart, quantity: cart.quantity + 1 } : cart)
        },


        decrement_: (state, payload) => {
            const product = state.cart.find(product => product.id === payload)

            if(product.quantity <= 1 ){
                // state.cart = state.cart.filter(cart => cart.id !== payload)
                state.cart = state.cart.map(cart => cart.id === payload ? { ...cart, quantity: cart.quantity = 1} : cart)

            }

            else
            state.cart = state.cart.map(cart => cart.id === payload ? { ...cart, quantity: cart.quantity - 1} : cart)
 
        },

        Remove_fromCart: (state, payload) => {
            state.cart = state.cart.filter(product => product.id !== payload)
        },
    }
});

export default store;