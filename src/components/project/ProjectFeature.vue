<script setup>

defineProps({

items:Array

})

</script>

<template>

<section class="box">

<h2>

주요 기능

</h2>

<div class="grid">

<div

v-for="item in items"

:key="item"

class="card"

>

<div class="icon">

✓

</div>

<p>

{{item}}

</p>

</div>

</div>

</section>

</template>

<style scoped>

.box{

padding:40px;

border-radius:24px;

margin-bottom:30px;

background:

var(--card);

}

.grid{

display:grid;

grid-template-columns:

repeat(
auto-fit,
minmax(
220px,
1fr
));

gap:18px;

margin-top:28px;

}

.card{

padding:24px;

border-radius:20px;

background:

rgba(
255,
255,
255,
0.45
);

border:

1px solid
var(--border);

transition:.2s;

}

.card:hover{

transform:

translateY(-4px);

}

.icon{

width:42px;

height:42px;

border-radius:50%;

display:flex;

align-items:center;

justify-content:center;

margin-bottom:16px;

background:

rgba(
255,
132,
198,
0.12
);

font-weight:bold;

}

p{

margin:0;

line-height:1.6;

}

</style>