<template>
    <div class="flex justify-center" :style="{
        border: '2px solid transparent',
    borderRightColor: props.isActive ? '#0F172A ' : 'none',
    }">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false,
    },
});
</script>
