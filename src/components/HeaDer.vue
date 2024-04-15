<template>
    <div
        class="md:w-16 w-full fixed z-50  md:bg-[#6c63ff] h-14 bottom-0 md:h-screen flex md:flex-col justify-center md:justify-between items-center ">
        <LoGo />
        <MeNu />
        <SetTing />
    </div>
</template>
<script setup>
import LoGo from './Aside/LoGo.vue';
import MeNu from './Aside/MeNu.vue';
import SetTing from './Aside/SetTing.vue';
</script>