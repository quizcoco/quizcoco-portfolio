<script setup>

import{ onMounted,ref } from "vue"

import{ reveal } from "../../composables/useScrollReveal"

const root=
ref()

onMounted(

()=>reveal(
root.value
)

)

</script>

<template>

<div
ref="root"
class="hidden"
>

<slot/>

</div>

</template>

<style scoped>

.hidden{

opacity:0;

transform:
translateY(
40px
);

}

.show{

opacity:1;

transform:
none;

transition:
.6s;

}

</style>