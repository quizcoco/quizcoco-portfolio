<script setup>


defineProps({

project:Object

})

</script>

<template>

<RouterLink
:to="`/projects/${project.id}`"
>

<article class="card">

<div class="top">

<div>

{{project.period}}

</div>

</div>

<h2>

{{project.title}}

</h2>

<p>

{{project.summary}}

</p>

<div class="tags">

<span

v-for="s in project.stack"

:key="s"

>

{{s}}

</span>

</div>

</article>

</RouterLink>

</template>

<style scoped>

.card{

padding:32px;

border-radius:28px;

background:var(--card);

border:1px solid var(--border);

transition:.25s;

height:100%;

}

.card:hover{

transform:

translateY(-8px);

}

.tags{

display:flex;

gap:8px;

flex-wrap:wrap;

margin-top:20px;

}

.tags span{

padding:8px 14px;

border-radius:999px;

background:

rgba(255,132,198,.15);

}

</style>