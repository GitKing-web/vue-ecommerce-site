<script setup>
import Header from '../components/Header.vue';
import Announcement from '../components/Announcement.vue';
import NewsLetter from '../components/NewsLetter.vue';
import Button from '../components/Button.vue'
import Footer from '../components/Footer.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../vuex/store';

const route = useRoute()
const product = ref({});


onMounted(() => {
    const productId = route.params.id
    const data = store.state.products.find((product) => product.id === parseInt(productId))
    product.value = data;
})

function AddToCart(id){
    store.dispatch('addToCart', id)
}



</script>

<template>
    <Header />
    <Announcement />
        <div class="product-info">
        <div class="img">
            <img :src="product.img" alt="">
        </div>
        <div class="info">
            <h1>{{ product.item }}</h1>
            <p>
                {{ product.desc }}
            </p>
            <span>${{ product.price }}</span>

            <div class="select d-flex justify-content-between p-3">
            <select class="form-control w-25">
                <option value="" disabled selected>Color</option>
                <option value="">red</option>
                <option value="">white</option>
                <option value="">black</option>
                <option value="">yellow</option>
                <option value="">green</option>
            </select>
            <select class="form-control w-25">
                <option value="" disabled selected>Size</option>
                <option value="">X</option>
                <option value="">Xl</option>
                <option value="">XXl</option>
            </select>
        </div>
        <Button class="btn btn-primary" @click="AddToCart(product.id)" title="Add to Cart"/>
        </div>
        
    </div>    
    <NewsLetter />
    <Footer />
</template>

<style scoped>
.product-info{
    padding: 50px;
    display: flex;
}
.img{
    flex: 1;
}

img{
    width: 100%;
    height: 90vh;
    object-fit: cover;
}
.info{
    flex: 1;
    margin: 20px 0px;
}
.info span{
   font-weight: 100;
   font-size: 40px;
}
.btn{
    margin-top: 30px;
    padding: 10px;
}

@media (max-width: 700px) {
    .product-info{
        flex-direction: column;
        padding: 12px;
    }

    img{
        object-fit: contain;
        height: 40vh;
    }
}
</style>