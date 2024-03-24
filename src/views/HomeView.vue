
<template>
  <main class="grid grid-cols-2 h-screen pl-16  bg-[#0F172A] overflow-y-hidden">
    <div class="flex justify-center items-center">
      <h1 class="text-primary-300 ">مرحبا يا مسلم</h1>

    </div>

    <div class="img flex justify-center flex-col p-6 ">
      <img src="../img/_3ef1eef1-a79d-49cf-9ecd-c0c6abadeefb-removebg-preview.png" class=" object-cover" alt="">
    </div>
  </main>
</template>
<style scoped>
 @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
 

 h1 {
   border-right: solid 3px rgba(0, 255, 0, .75);
   white-space: nowrap;
   overflow: hidden;
   font-family: 'Source Code Pro', monospace;
   font-size: 50px;
   color:rgb(110, 231, 183);
 }

 /* Animation */
 h1 {
   animation: animated-text 4s steps(29, end) 1s 1 normal both,
     animated-cursor 600ms steps(29, end) infinite;
 }

 /* text animation */

 @keyframes animated-text {
   from {
     width: 0;
   }

   to {
     width: 472px;
   }
 }

 /* cursor animations */

 @keyframes animated-cursor {
   from {
     border-right-color:rgb(110, 231, 183) ;
   }

   to {
     border-right-color: transparent;
   }
 }
</style>
