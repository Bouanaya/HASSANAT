<template>
    <div class="">
        <div class="md:flex flex-col items-center space-y-20  py-2 px-4 rounded-lg hidden">
            <router-link to="/Quoran" v-slot="{ isActive }">
                <BaseIcon :is-active="isActive">
                    <BookIcon />
                </BaseIcon>
            </router-link>





            <router-link to="/Doaa" v-slot="{ isActive }">
                <BaseIcon :is-active="isActive">
                    <TasbihIcon />
                </BaseIcon>

            </router-link>
        </div>
        <div class="md:hidden  w-screen flex justify-center items-center" id="box" v-show="!Menu">
            <button @click="ShowMenu" class="fixed border-green-300  mb-2 border-2 p-2  rounded-full ">
                <MenuIcon />
            </button>
        </div>
        <div class="flex md:hidden bg-green-500 rounded-xl mb-2 w-1/2   m-auto" :class="{ Menu: !Menu }">
            <div class=" rounded-md p-2 space-x-12 flex justify-center duration-1000">
                <router-link to="/Quoran">
                    <BookIcon />
                </router-link>
                <router-link to="/Salat">
                    <SalatIcon></SalatIcon>

                </router-link>
                <router-link to="/Doaa">
                    <TasbihIcon />
                </router-link>
                <router-link to="/Doaa">
                    <TasbihIcon />
                </router-link>
            </div>

        </div>
    </div>
</template>
<style scoped>
</style>
<script setup>

import TasbihIcon from '@/icons/TasbihIcon.vue';
import BookIcon from '@/icons/BookIcon.vue'
import MenuIcon from '@/icons/MenuIcon.vue'
import { ref } from 'vue'
import BaseIcon from '../../icons/BaseIcon.vue';
const Menu = ref(false)

const ShowMenu = () => {
    if (ShowMenu) {
        Menu.value = !Menu.value

    }
}




</script>