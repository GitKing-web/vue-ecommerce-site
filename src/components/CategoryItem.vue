<script setup>
import Button from './Button.vue'
defineProps({
    id: Number,
    title: String,
    img: String
})
</script>

<template>
    <div class="stuff card">
        <img :src="img" alt="">
        <div class="info">
            <h1>{{ title }}</h1>
            <RouterLink to="/products">

                <Button title="SHOP NOW"/>
            </RouterLink>
        </div>
        
    </div>
</template>

<style scoped>
.stuff{
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6), rgba(0, 0, 0, .6))
}

img{
    width: 100%;
    height: 100vh;
    object-fit: contain;
    opacity: .5;

}
.info{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1{
    color:aliceblue;
    font-size: 50px;
    margin-bottom: 20px;
}
button{
    border: none;
    padding: 20px;
    background:  #182848;
    color: grey;
    font-weight: 600;
    cursor: pointer;
}

@media (max-width: 700px) {
    .card{
        height: 40vh;
    }
}
</style>