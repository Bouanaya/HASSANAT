<template>
    <div class="flex">
        <heaDer />
        <div class=" relative w-screen h-screen  ">
      
            <router-view></router-view>
        </div>


    </div>
</template>

<script setup>
import HeaDer from '../HeaDer.vue';
 

</script>
<style scoped>
 


</style>
 