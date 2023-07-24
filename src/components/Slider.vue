<!-- eslint-disable vue/multi-word-component-names -->
<script>
import store from '../vuex/store';
import Slides from './Slides.vue';
export default{
    name: 'Slider',
    components: {
        Slides
    },
    data(){
        return{
             currentSlide: 0,
             slideInterval: 0,
             store ,
             direction: 'right'
        }
    },
    methods: {
        setCurrentSlide (index) {
            this.currentSlide = index
        },
        left(){
            const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.store.state.slider.length - 1;
            this.setCurrentSlide(index)
            this.direction = 'left'
        },
        right(){
            const index = this.currentSlide < this.store.state.slider.length -1 ? this.currentSlide +1 : 0;
            this.setCurrentSlide(index)
            this.direction = 'right'
        },
    },
    mounted(){
        this.slideInterval = setInterval(() => {
            this.right()
        }, 10000)
    }
}


</script>
<template>
    <div class="containers">
        <div class="arrow">
            <button class="left" @click="left()">              
                <i class="fas fa-arrow-left"></i>
            </button>
        </div>

        <div v-for="( slide , index ) in store.state.slider" :key='index'  >
            <Slides :id="slide.id" :image="slide.image" 
            :title="slide.title" :desc="slide.desc" 
            :currentSlide="currentSlide" :index="index" :direction="direction"/>
        </div>
        <div class="arrow">
            <button class="right" @click="right()">
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>
.containers{
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    /* background-color: coral; */
}
.arrow{
    width: 20%;
    height: 24%;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    align-items: center;
    justify-content: center;
}

.fas{
    padding: 20px;
}

 
.left{
    border-radius: 50%;
    padding: 20px;
    opacity: .54;
    z-index: 2;
    margin-left: -15rem;
    border: none;
}
.right{
    border-radius: 50%;;
    padding: 20px;
    opacity: .54;
    margin-right: -205rem;
    border: none;
}
</style>