<template>

    <Btn @click="swiper.slideNext()"  icon=" pi pi-arrow-right" label=" Next"
        severity="info" text />
</template>
<script setup>
import { useSwiper } from 'swiper/vue';
import 'primeicons/primeicons.css'
import Btn from 'primevue/button';

const swiper = useSwiper();
</script>