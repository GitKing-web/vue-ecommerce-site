<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Button from './Button.vue';
    export default{
        name: 'Slides',
        components: {
            Button
        },
        props: {
            id: Number,
            image: String,
            title: String,
            desc: String,
            index: Number,
            currentSlide: Number,
            direction: String
        },
        computed: {
            transitionEffect() {
                return this.direction === 'right' ? 'slide-in' : 'slide-out'
            }
        }
    }

</script>

<template>

<transition :name="transitionEffect">
    <div class="wrapper" v-show="currentSlide === index">

    <div class="slide">
     <div class="img">
        <img :src="image" alt="">
    </div>
    <div class="info">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
        <Button class="shop" title="Shop Now" />
    </div>
</div>

</div>
</transition>
</template>

<style scoped>
.wrapper{
    /* width: 100vw; */
    height: 100%;
    /* transition: all 1.5s ease; */
    display: flex;
    
    
}
.slide{
    display: flex;
    width: 100vw;
    align-items: center;
    height: 100vh;
    transition: all 1.5s ease;
    
}
img{
    height: 90%;
    width: 100%;

}
.img{
    margin-top: 8px; 
    flex: 1;
    height: 100%;
    margin-left: 6rem;
}
.info{
    flex: 1;
    top: 0;
    padding: 50px;
    bottom: 0;
    margin: auto;
}
.info h3{
    font-size: 70px;
}
.info p{
    font-size: 20px;
    margin: 25px 0px;
    letter-spacing: 3px;
}
.shop{
    background-color: #182848;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active{
    transition: all 1.5s ease;
}
.slide-in-enter-from{
    transform: translateX(100vw);
}
.slide-in-leave-to{
    transform: translateX(100vw);
}
.slide-out-enter-from{
    transform: translateX(100vw);
}
.slide-out-leave-to{
    transform: translateX(100vw);
}
</style>