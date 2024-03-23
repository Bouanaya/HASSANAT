<template>
    <div class="w-full h-full bg-primary-400 md:pl-16">
        <div class="w-full h-full grid grid-cols-2">
            <Times />
            <div class="relative">
                <SearCh></SearCh>
                <div class=" grid grid-cols-3 px-5 gap-6 py-6 mt-20  ">
                    <button
                        class="bg-[#0F172A] h-20 flex flex-col justify-center items-center text-primary-50 rounded-lg duration-500  hover:shadow-lg hover:shadow-[#0f172a] "
                        v-for="(item, index) in 15" :key="index" @click="show">

                        <h1>Skhirat</h1>
                        <h1 class="font-mono">ٱلْفَاتِحَ</h1>
                    </button>
                </div>
                <div v-if="showTime" class="w-full h-full absolute top-0 bg-[#0f172a] border-l-2 border-primary-50">
                    <div class="">
                        <button class="p-2 " @click="showTime = false">
                            <ReteRn />
                        </button>
                    </div>
                    <div class="w-full h-20 flex justify-center items-center ">
                        <Carousel>
                            <Slide v-for="slide in 3" :key="slide.count">
                                <div class="mx-4 p-4 absolute w-3/4 ">
                                    <h1 class="text-primary-400 text-center cursor-pointer text-2xl  ">
                                        <h1>
                                            13 رمضان, 1445
                                            هـ
                                        </h1>
                                        <h1 class="text-sm"> السبت، 23 مارس 2024</h1>

                                    </h1>
                                </div>
                            </Slide>

                            <template #addons>
                                <Navigation />

                            </template>
                        </Carousel>
                    </div>
                    <div class="w-full px-8 mt-8 space-y-8 pt-6">
                        <div class="grid grid-cols-2 gap-4" v-for="(item, index) in 6" :key="index">
                            <div class="bg-primary-400 h-10 flex justify-center items-center rounded-md &">fajer</div>
                            <div class="bg-primary-60 flex justify-center items-center rounded-md">04:59</div>
                        </div>

                    </div>

                </div>
            </div>



        </div>

    </div>
</template>
<script >

import { defineComponent } from 'vue'
import ReteRn from '../icons/ReteRn.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Times from '../components/Salat/TimE.vue'
import SearCh from '../components/Salat/SearCh.vue'

export default defineComponent({
    components: {
        Carousel,
        Slide,
        Navigation,
        Times,
        SearCh,
        ReteRn
    },
    data() {
        return {
            showTime : false
            
        }
    },
    methods: {
        show(){
            this.showTime = !this.showTime
        }
    },
})



</script>
<style>
.carousel__slide {
    padding: 10px;
    width: 100px;



}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 2px solid #10B981;
    border-radius: 100%;

    color: white;


}

.carousel {
    width: 700px;
    height: 100px;
    z-index: 0;
    background-color: transparent;
    position: relative;
}

ol.carousel__track {
    height: 100px;
    width: 200px;
}
</style>
