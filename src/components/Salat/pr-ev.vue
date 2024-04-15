<template>

    <Btn @click="swiper.slidePrev()" icon="pi pi-arrow-left" label=" Prev" text raised />
</template>
<script setup>
import { useSwiper } from 'swiper/vue';
import 'primeicons/primeicons.css'
import Btn from 'primevue/button';

const swiper = useSwiper();
</script>