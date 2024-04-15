
<template>
  <main class="  h-screen pl-16 bg-[#0F172A] overflow-y-hidden">
    <div class="light"></div>
    <div class="flex justify-center items-center h-full">
      <h1 class="text-slate-900 text-9xl font-bold ">H A S S A N A T</h1>
    </div>

  </main>
</template>
<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
 

 h1 {
 
   white-space: nowrap;
   overflow: hidden;
   font-family: 'Source Code Pro', monospace;
   
   color:wheat;
 }

 .light{
  width: 100%;
  height: 100%;
  margin-left: 64px;
  position: fixed;
  z-index: 1000;
  pointer-events: none;
  top:0 ;
  left: 0;
  background:radial-gradient(circle at var(--x) var(--y), transparent 10%, rgba(0, 0, 0, 0.95) 30%);
  
 }

  
</style>
<script setup>
const pos = document.documentElement
 pos.addEventListener("mousemove", e=>{
  console.log(e);
  pos.style.setProperty("--x", e.clientX + "px")
   pos.style.setProperty("--y", e.clientY + "px")


 })


</script>
