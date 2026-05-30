<script setup>

import skills from "../data/skills"

</script>

<template>

<section class="skills">

<div class="container">

<div class="title">

<h1>

기술 스택

</h1>

<p>

주로 사용하는 기술입니다

</p>

</div>

<div class="grid">

<div

v-for="group in skills"

:key="group.category"

class="card"

>

<h2>

{{group.category}}

</h2>

<div class="tags">

<span

v-for="skill in group.items"

:key="skill"

>

{{skill}}

</span>

</div>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.skills{

padding:140px 0;

}

.container{

width:min(1200px,95%);

margin:auto;

}

.title{

text-align:center;

margin-bottom:70px;

}

.title h1{

font-size:56px;

margin-bottom:12px;

}

.title p{

color:var(--sub);

font-size:20px;

}

.grid{

display:grid;

grid-template-columns:

repeat(
auto-fit,
minmax(
280px,
1fr
));

gap:24px;

}

.card{

padding:36px;

border-radius:28px;

background:

rgba(
255,
255,
255,
0.45
);

backdrop-filter:

blur(
18px
);

border:

1px solid
var(--border);

transition:.25s;

}

.card:hover{

transform:

translateY(-8px);

}

.card h2{

margin-bottom:28px;

}

.tags{

display:flex;

gap:10px;

flex-wrap:wrap;

}

.tags span{

padding:

10px 18px;

border-radius:

999px;

background:

rgba(
255,
132,
198,
0.12
);

}

@media(
max-width:700px
){

.title h1{

font-size:40px;

}

}

</style>