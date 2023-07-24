<script setup>
import Header from '../components/Header.vue';
import Announcement from '../components/Announcement.vue'
import Cards from '../components/Cards.vue';
import NewsLetter from '../components/NewsLetter.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <Header />
    <Announcement />
    <div class="filter">
        <h2>Products</h2>
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
    </div>
    <Cards />
    <NewsLetter />
    <Footer />
</template>