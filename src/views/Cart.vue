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
        <div class="d-flex p-3 justify-content-between align-center top">
            <h3 class="bag">YOUR BAG</h3>
            <div class="buttons">
                <RouterLink :to="{ name: 'Products'}">
                    <Button title="Continue Shopping" class="btn1" />
                </RouterLink>
                <Button title="Checkout Now" class="btn" />
            </div>
        </div>
        
        <div v-if="store.state.cart.length > 0">
            <div v-for="cart in store.state.cart" :key="cart.id" class="p-4">
            <div>
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
                            <Button @click="Increment(cart.id)" class="btn2" title="+" />
                            <Button @click="Decrement(cart.id)" class="btn2" title="-" />
                            <Button @click="Remove(cart.id)" class="btn2" title="x" />

                        </div>
                </div>
                <hr>
            </div>
          </div>
        </div>
        </div>
        <div v-else>
            <h3 class="noProd">No product in Cart</h3>
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
        padding: .5rem;
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
    .buttons{
        display: flex;
        justify-content: space-between;
        width: 20%;
    }
    img{    
        width: 20%;
        object-fit: cover;
    }
    .top h3{
        font-size: 40px;
        font-weight: 200;
    }
    .btn{
        background-color: #182848;
        color: #fff;
        padding: 1rem;
    }
    .btn1{
        background-color: teal;
        border: none;
        border-radius: 6px;
        color: #fff;
        padding: 1rem;
    }
    .btn2{
        border: none;
        background-color: transparent;
        font-size: 40px;
    }
    .noProd{
        text-align: center;
        margin: 1.26rem;
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
        .top h3{
            font-size: 24px;
        }
        
        .buttons{
            width: 70%;
        }
        .btn1{
            font-size: 13px;
        }
        .btn{
            font-size: 13px;
        }
        .noProd{
            margin-top: 12rem;
            margin-bottom: 12rem;
        }
        img{
            width: 100%;
            object-fit: contain;
        }
    }
</style>