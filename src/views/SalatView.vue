<template>
    <div class="w-full h-full bg-primary-400 md:pl-16">
        <div class="w-full h-full grid grid-cols-2 ">
            <Times />
            <div class="relative">
                <!--                        SELECT                  -->
                <div class="card flex flex-col justify-center items-center h-full space-y-8 ">
                    <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name"
                        placeholder="Select a Country" class="w-full md:w-[14rem] mt-4">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center">
                                <img :alt="slotProps.value.label"
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                    :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`"
                                    style="width: 20px; height: 13.4px" />
                                <div>{{ slotProps.value.name }}</div>
                            </div>
                            <span v-else>
                                {{ slotProps.placeholder }}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex items-center">
                                <img :alt="slotProps.option.label"
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_maroc.png"
                                    :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
                                    style="width: 20px; height: 13.4px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Dropdown>
                    <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name"
                        placeholder="Select a Country" class="w-full md:w-[14rem] mt-4">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center">
                                <img :alt="slotProps.value.label"
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                    :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`"
                                    style="width: 20px; height: 13.4px" />
                                <div>{{ slotProps.value.name }}</div>
                            </div>
                            <span v-else>
                                {{ slotProps.placeholder }}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex items-center">
                                <img :alt="slotProps.option.label"
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_maroc.png"
                                    :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
                                    style="width: 20px; height: 13.4px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Dropdown>
                    <Botton label="Secondary" severity="secondary" icon="pi pi-check" />
                </div>
                <div v-if="showTime" class="w-full h-full absolute top-0 bg-primary-400 text-[#0F172A] ">
                    <div class="">
                        <button class="p-2 " @click="showTime = false">
                            <ReteRn />
                        </button>
                    </div>
                    <div class="w-full h-20 flex justify-center items-center ">
                        <Carousel>
                            <Slide v-for="slide in 3" :key="slide.count">
                                <div class="mx-4 p-4 absolute w-3/4 ">
                                    <h1 class=" text-center cursor-pointer text-2xl  ">
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
                            <div
                                class="bg-[#0F172A] text-primary-200 h-10 flex justify-center items-center rounded-md ">
                                fajer</div>
                            <div class="bg-[#0F172A] text-primary-200 flex justify-center items-center rounded-md">04:59
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </div>

    </div>
</template>
<script>

import { defineComponent } from 'vue'
import ReteRn from '../icons/ReteRn.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Times from '../components/Salat/TimE.vue'
import axios from 'axios'
import Dropdown from 'primevue/dropdown';

import Botton from 'primevue/button';



export default defineComponent({
    components: {
        Botton,
        Carousel,
        Slide,
        Navigation,
        Times,
        ReteRn,
        Dropdown
    },
    data() {
        return {
            showTime: true,
            Time: "",
            dataLoaded: false,
            date: new Date(),
            selectedCountry: null,
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ]


        }
    },
    methods: {
        show() {
            this.showTime = !this.showTime
        }
    },
    mounted() {
        axios.get('http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates&method=8')
            .then(res => {
                this.Time = res.data;
                this.dataLoaded = true;
                console.log(this.Time); // Set to true when data is ready
            })
            .catch(error => {
                console.error('Failed to fetch data:', error);
            });
    },
})



</script>
<style scoped>
.carousel__slide {
    padding: 10px;
    width: 100px;



}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 2px solid #0F172A;
    border-radius: 100%;
    color: white;


}

.carousel {
    width: 700px;
    height: 100px;
    z-index: 0;
    position: relative;
}

ol.carousel__track {
    height: 100px;
    width: 200px;
}
</style>
