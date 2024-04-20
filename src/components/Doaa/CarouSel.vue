<template>
    <Carousel>
        <Slide v-for="slide in Doa" :key="slide.count">
            <div class="mx-4 p-4 absolute w-3/4 ">
                <h1 class="text-primary-400 text-center cursor-pointer text-2xl font-othmani  ">{{ slide.content}}</h1>
            </div>
        </Slide>

        <template #addons>
            <Navigation />

        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Doaa from '../../DB/adkar.json'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
  },
data() {
return {
Doa: Doaa.Tasbih
}
},
})
</script>
<style>

.carousel__slide {
    padding: 10px;
    width: 100px;

 
 
}
.carousel__icon{
    transition: .5s;
}
.carousel__icon:hover{
    color: #10B981;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 2px solid #10B981;
    border-radius: 100%;
 
    color:white;
    

}
.carousel{
    width: 700px;
    height: 100px;
    z-index: 0;
    background-color: transparent;
    position: relative;
}
ol.carousel__track{
    height: 100px;
    width: 200px;
}
</style>
