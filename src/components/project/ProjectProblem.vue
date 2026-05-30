<script setup>

defineProps({

problems:Array

})

</script>

<template>

<section class="box">

<h2>

문제 해결

</h2>

<div class="list">

<div

v-for="p in problems"

:key="p.title"

class="card"

>

<div class="head">

<h3>

{{p.title}}

</h3>

</div>

<div class="grid">

<div class="item">

<span>

원인

</span>

<p>

{{p.reason}}

</p>

</div>

<div class="item">

<span>

해결

</span>

<p>

{{p.solve}}

</p>

</div>

<div class="item result">

<span>

결과

</span>

<p>

{{p.result}}

</p>

</div>

</div>

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

gap:24px;

margin-top:28px;

}

.card{

padding:28px;

border-radius:22px;

background:

rgba(
255,
255,
255,
0.40
);

border:

1px solid
var(--border);

backdrop-filter:

blur(10px);

}

.head{

margin-bottom:22px;

}

.head h3{

margin:0;

font-size:26px;

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

}

.item{

padding:20px;

border-radius:18px;

background:

rgba(
255,
255,
255,
0.10
);

}

.item span{

display:block;

font-size:13px;

color:var(--sub);

margin-bottom:10px;

}

.item p{

margin:0;

line-height:1.7;

word-break:keep-all;

}

.result{

border:

1px solid

rgba(
255,
132,
198,
0.18
);

}

@media(
max-width:700px
){

.box{

padding:28px;

}

.head h3{

font-size:22px;

}

}

</style>