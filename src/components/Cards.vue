<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import Card from './Card.vue';
    import store from '../vuex/store'
</script>


<template>
    <div class="cards">

        <div v-for="product in store.state.products" :key="product.id">
            <Card :id="product.id" :img="product.img" :item="product.item" :price="product.price" />
        </div>
    </div>
</template>

<style scoped>
    .cards{
        position: relative;
        width: 100%;
        /* margin: 10%ss; */
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
    @media (max-width: 700px) {
        .cards{
            display: inline-block;
            margin-top: 2rem;
        }
    }
</style>