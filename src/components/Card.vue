<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import store from '../vuex/store';
import router from '../router'
import Button from './Button.vue';
export default{
    name: 'Card',
    props: {
        id: Number,
        item: String,
        img: String,
        price: Number,
    },
    components: {
        Button
    },
    methods:{
        AddToCart(id){
        store.dispatch('addToCart', id)
    },
    View(productId){
        router.push(`/product/${ productId }`)
        console.log(productId);
    }
    }
}
</script>

<template>
    <div class="card shadow">
        <img :src="img" alt=""/>
        <div class="p-4 d-flex justify-content-between">
            <h5>{{ item }}</h5>
            <p>${{ price }}</p>
        </div>
        <div class="buttons d-flex justify-content-between p-3 m-2 w-100">
            <Button class="btn w-50" @click="AddToCart(id)" title="Add to cart"  />
            <RouterLink :to="{name: 'Product', params: {id}}">
                <Button class="btn p-3 view" title="view" style="background: teal;" @click="View(id)" />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .card{
        width: 100%;
        /* height: 60vh; */
        
    }
    img{
        height: 45vh;
        padding: 2rem;
        width: 100%;
        object-fit: cover;
    }
    .btn{
        background:  #182848;
        color: aliceblue;
    }
    .view{
        margin-right: 10px;
    }
    @media (max-width: 700px) {
        .card{
            margin-top: 2rem;
        }
        img{
            width: 100%;
            height: 60vh;
        }
    }
</style>