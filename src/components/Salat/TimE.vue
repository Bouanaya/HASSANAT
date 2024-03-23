<template>
    <div class="w-full h-full bg-[#0F172A] flex justify-center items-center ">
        <div class="w-3/4 h-40 bg-primary-300 grid grid-cols-3 time">
            <div class="flex justify-center items-center w-full  h-full border-r-8 border-[#0F172A]">
                <h1 class=" text-7xl text-[#0F172A]">{{ Hours }}</h1>

            </div>
            <div class="flex justify-center items-center w-full h-full  border-r-8 border-[#0F172A] ">
                <h1 class="text-7xl text-[#0F172A]">{{ Mintes }}</h1>

            </div>
            <div class="flex justify-center items-center w-full h-full">
                <h1 class="text-7xl text-[#0F172A]">{{ Secondes }}</h1>

            </div>


        </div>

    </div>
</template>
<script setup>
import {ref} from 'vue'
const Hours = ref('')
const Mintes = ref('')
const Secondes = ref('')
function settime() {
    Hours.value = new Date().getHours()
    Mintes.value = new Date().getMinutes()
    Secondes.value = new Date().getSeconds()

}
setInterval(settime, 500)





</script>
<style scoped>
.time{
    font-family: 'digital-clock-font';
    src: url('path/to/your/font.ttf') format('truetype');
}

</style>