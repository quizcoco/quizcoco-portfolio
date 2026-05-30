<script setup>

defineProps({

items:Array

})

</script>

<template>

<section class="box">

<h2>

기술 적용

</h2>

<div class="list">

<div

v-for="item in items"

:key="item"

class="item"

>

<div class="dot">

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

background:var(--card);

}

.list{

display:flex;

flex-direction:column;

gap:18px;

margin-top:28px;

}

.item{

display:flex;

gap:16px;

align-items:flex-start;

padding:20px;

border-radius:18px;

background:

rgba(
255,
255,
255,
0.4
);

border:

1px solid
var(--border);

}

.dot{

width:10px;

height:10px;

border-radius:50%;

margin-top:9px;

background:

rgba(
255,
132,
198,
0.7
);

flex-shrink:0;

}

p{

margin:0;

line-height:1.7;

}

</style>