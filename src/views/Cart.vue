<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Button from '../components/Button.vue';
import store from '../vuex/store';
import Header from '../components/Header.vue';
import Announcement from '../components/Announcement.vue';
import NewsLetter from '../components/NewsLetter.vue';
import Footer from '../components/Footer.vue'

function Increment(id){
    store.dispatch('increment', id)
}

function Decrement(id){
    store.dispatch('decrement', id)
}

const Remove = (id) => {
    store.dispatch('removeFromCart', id)
}

</script>

<template>
    <Header />
    <Announcement />
    <div>
        <div class="d-flex p-3 justify-content-between align-center">
            <h3>Cart</h3>
            <Button title="Check out" class="btn" />
        </div>
        
        <div v-if="store.state.cart.length > 0">
            <div v-for="cart in store.state.cart" :key="cart.id" class="p-4">
            <div class="card shadow">
            <div class="media">
                <img :src="cart.img" alt="">
            <div class="info">
                <!-- <div class=""> -->
                        <div class="d-flex gap-5">
                            <h5>Quauntity:</h5> <span>{{ cart.quantity }}</span>
                        </div>

                        <div class="d-flex gap-5">
                            <h5>Price: </h5> <span>${{ (cart.price * cart.quantity).toFixed(2) }}</span>
                        </div>

                        <div class="d-flex gap-1">
                            <Button @click="Increment(cart.id)" class="btn" title="+" />
                            <Button @click="Decrement(cart.id)" class="btn" title="-" />
                            <Button @click="Remove(cart.id)" class="btn" title="X" />

                        </div>


                <h5 class="mt-2">Description:</h5>
                    <p>
                        {{ cart.desc }}
                    </p>
                </div>
            </div>
          </div>
        </div>
        </div>
        <div v-else>
            <h3>No product in Cart</h3>
        </div>

    </div>
    <NewsLetter />
    <Footer />
</template>

<style scoped>
    /* div{
        padding: 2rem;
    } */
    .card{
        padding: 1rem;
        height: auto;
    }
    .media{
        display: flex;
        /* flex: 1; */
        justify-content: space-between;
    }
    .info{
        /* flex: 1; */
        top: 0;
        left: 0;
        margin: auto;
    }
    img{    
        width: 60%;
        object-fit: cover;
    }
    .btn{
        background-color: #182848;
        color: #fff;
        padding: 1rem;
    }
    @media (max-width: 700px) {
        .card{
            width: 100%;
        }
        img{
            width: 100%;
            height: 60vh;
        }
        .media{
            display: block;
        }
        .media1{
            text-align: left;
        }
    }
</style>