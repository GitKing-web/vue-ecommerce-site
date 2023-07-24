<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    defineProps({
        title: String,
    })

</script>
<template>
    <button>{{ title }}</button>
</template>