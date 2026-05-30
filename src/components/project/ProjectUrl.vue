<script setup>

defineProps({

urls:Array

})

</script>
<template>

<section class="links">

<a

v-for="url in urls"

:key="url.link"

:href="url.link"

target="_blank"

>

{{url.name}}

</a>


</section>

</template>

<style scoped>

.links{

display:flex;

gap:14px;

margin:

40px auto;

width:min(1200px,92%);

}

.links a{

padding:

14px 24px;

border-radius:

999px;

background:var(--primary);


transition:.2s;

}

.links a:hover{

transform:

translateY(-2px);

}

</style>