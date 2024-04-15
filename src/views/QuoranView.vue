<template>
  <div class="w-full h-screen bg-[#0F172A] ">
    <div class="w-full  md:pl-16 space-y-8 bg-[#0F172A] flex flex-col">
      <div class="text-primary-400 Search bg-[#0F172A]  flex justify-center fixed z-50 py-10">

        <span class="absolute  z-50 top-6 ">
          <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
          <InputText v-model.trim()="data"  placeholder="Search" class="pl-10 bg-primary-50" />
        </span>


        <div class="absolute md:w-[90%] w-[100%]   m-auto h-10  bg-[#0F172A] blur-sm md:-bottom-4 "></div>

      </div>

      <div class="md:pl-24 px-10 md:flex flex-wrap grid grid-cols-2  gap-8 py-24" v-if="dataLoaded">
        <RouterLink :to='`/Quoran/${item.englishName}`' v-for="item in quran " :key="item" class="duration-500   relative md:w-48 hover:bg-primary-300 hover:shadow-lg hover:shadow-primary-500/30 
       h-20 bg-primary-100  rounded-md flex justify-center flex-col items-center ">
          <h1 class="font-mono">{{ item.name }}</h1>
          <h1>{{ item.englishName }}</h1>
          <span class="absolute  -top-5  bg-primary-100 rounded-full w-8 h-8 p-2 flex justify-center items-center">{{
            item.number }}</span>
        </RouterLink>

      </div>
      <div class="w-full h-screen flex justify-center items-center" v-else>
        <spinNes />

      </div>
    </div>
  </div>
</template>
<style scoped>
.Search {
  width: calc(100% - 64px);
}
</style>
<script setup>
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'
import spinNes from '../components/Doaa/spinNes.vue'
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';

const Qur = ref("")
const quran = ref(Qur)
const data = ref("");
const dataLoaded = ref(false);




watch(data, () => {
  quran.value = Qur.value.filter((item) =>
    item.englishName.toLowerCase().includes(data.value.toLowerCase())
  );
});
 






onMounted(() => {
  axios.get('http://api.alquran.cloud/v1/quran/ar.alafasy')
    .then(res => {
      
      Qur.value = res.data.data.surahs;
      dataLoaded.value = true;
      console.log(res.status); // Set to true when data is ready
    })
    .catch(error => {
      console.error('Failed to fetch data:', error);
    });
});





</script>
