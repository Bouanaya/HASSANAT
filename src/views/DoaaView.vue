<template>
    <div class="w-full h-full md:pl-16 bg-[#0F172A] overflow-x-hidden flex  justify-center py-10">
        <div class="flex flex-col  space-y-8">
            <div class="flex space-x-6  justify-center">
              
                <div class="Edit flex space-x-6 ">

                    <button class="py-1 px-4 rounded-md bg-primary-300 hover:bg-primary-500" @click="Rest">Rest</button>
                </div>
            </div>


            <CarouSel></CarouSel>


            <div class="flex justify-center">
                <h1 class="text-primary-300 text-7xl">{{ tas }}</h1>
            </div>

            <div class="flex justify-center ">

                <div class=" relative">
                    <button @click="incr"
                        class="z-50 w-48 h-48 bg-primary-100 rounded-full duration-500 hover:bg-primary-500 flex justify-center items-center">
                        <FlechDown></FlechDown>
                    </button>


                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


import FlechDown from '../icons/FlechDown.vue';
import { ref } from "vue"
import CarouSel from '@/components/Doaa/CarouSel.vue';
const tas = ref("0")
const Rest = () => {
    tas.value = 0
}
const incr = () => {
    if (tas.value >= 0 && tas.value < 99) {
        tas.value++
    }
    else if (tas.value == 99) {

        Rest()

    }
}


</script>
<style scoped>
@import url(https://fonts.googleapis.com/earlyaccess/thabit.css);

.Doaa {
    font-family: 'Thabit', serif;


}

</style>