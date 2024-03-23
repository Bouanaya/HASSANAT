<template>
    <div class="fixed w-1/2  h-20 bg-primary-400 ">
        <div class="flex h-full justify-center">

            <span class="absolute  z-50 top-6 ">
                <i class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                <InputText placeholder="Search" class="pl-10 bg-primary-50" />
            </span>


            <div class="absolute w-[90%] m-auto h-5 bg-primary-400 blur-md -bottom-2"></div>

        </div>
    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css'

</script>
 