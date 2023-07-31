<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import CategoryItem from './CategoryItem.vue';
import store from '../vuex/store';
</script>

<template>
    <div class="containers d-flex justify-content-between p-3">

        <div v-for="(category, index) in store.state.categories"  :key="index">
            <CategoryItem :id="category.id" :title="category.title" :img="category.img"/>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 700px) {
    .containers{
        flex-direction: column;
        padding: 0;
    }
}

</style>