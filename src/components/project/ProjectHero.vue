<script setup>

defineProps({
    title:String,
    sub:String
})

import Reveal from "../effects/Reveal.vue"


</script>

<template>

<Reveal>
<section
class="hero content">

<div
class="container"
>

<h1>

{{title}}

</h1>

<p>

{{sub}}

</p>

</div>

</section>
</Reveal>

</template>

<style scoped>

.hero{

padding:

120px 0;

}

h1{

font-size:

64px;

}

p{

font-size:

22px;

color:

var(--sub);

}

</style>