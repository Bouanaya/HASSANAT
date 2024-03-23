<template>
    <div class="pl-16 py-6 bg-[#0F172A] w-full h-full flex justify-center flex-col space-y-8 items-center">
        <div
            class="bg-primary-400 w-3/4 h-3/4 relative flex justify-center rounded-md shadow-primary-500/30 shadow-lg  ">
            <div class="namesourat absolute -top-10 bg-primary-300 text-center px-6 py-2  rounded-md">
                <h1 class="font-mono">سُورَةُ ٱلْفَاتِحَةِ</h1>
                <h1>Al-Faatiha</h1>

            </div>
            <div class="ayat text-center flex justify-center items-center flex-col ">
                <p class="text-5xl">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
            </div>
            <div class="page absolute -bottom-5 bg-primary-300 p-3  rounded-lg flex justify-center items-center">
                <h1>juz : 1</h1>
            </div>

        </div>


        <div class="audio bg-primary-400 rounded-md w-1/2 h-16 relative ">
            <AudioPlayer class="" :option="{
                src: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3',
                coverImage: '../../public/quran .png',

            }" />
        </div>


    </div>




</template>
<script setup>
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

</script>


<style>
.audio__player-progress-container[data-v-370a6415] {
    position: absolute;
    top: 10px;

}

.audio__player-play img[data-v-370a6415] {
    width: 50px;
    height: 50px;

}

.audio__player-play[data-v-370a6415] {
    position: absolute;
    left: 0;
    top: 10px;

}

.audio__player-play-icon[data-v-370a6415] {
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
    left: 300px;
    top: 30px;
    background-color:#6EE7B7;
    color: #0F172A;
    opacity:100;

}
</style>