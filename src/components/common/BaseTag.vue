<script setup>

defineProps({

label:String

})

</script>

<template>

<span class="tag">

{{label}}

</span>

</template>

<style scoped>

.tag{

padding:6px 12px;

background:#eee;

border-radius:999px;

}

</style>