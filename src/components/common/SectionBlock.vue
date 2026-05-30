<script setup>

defineProps({

title:String

})

</script>

<template>

<section>

<h2>

{{title}}

</h2>

<slot/>

</section>

</template>

<style scoped>

section{

margin-bottom:80px;

}

h2{

margin-bottom:20px;

}

</style>