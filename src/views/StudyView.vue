<script setup>

import studies from "../data/studies"

</script>

<template>

<section class="study">

<div class="container">

<! ============ 타이틀 =================>

<div class="title">

<h1>

공부 기록

</h1>

<p>

기술을 배우고 기록한 흔적입니다

</p>

</div>
<! ================== 블로그 =====================>
<section class="card">

<div class="head">

<div>

<div class="small">

BLOG

</div>

<h2>

{{studies.blog.title}}

</h2>

</div>

<a

:href="studies.blog.url"

target="_blank"

>

보러가기 →

</a>

</div>

<p class="desc">

{{studies.blog.description}}

</p>

<div class="topics">

<span

v-for="topic in studies.blog.topics"

:key="topic"

>

{{topic}}

</span>

</div>

<div class="ideas">

<div>

<h3>

기록하는 내용

</h3>

<ul>

<li

v-for="item in studies.blog.contents"

:key="item"

>

{{item}}

</li>

</ul>

</div>

</div>

</section>

<! ============ 자격증,교육 ====================>
<section class="career">


<div class="career-list">

<!-- 자격증 -->

<div class="career-card">

<div class="small">

License

</div>

<div

v-for="license in studies.licenses"

:key="license.name"

class="item"

>

<h3>

{{license.name}}

</h3>

<p>

{{license.date}}

·

{{license.organization}}

</p>

</div>

</div>

<!-- 교육 -->

<div class="career-card">

<div class="small">

Education

</div>

<div

v-for="edu in studies.education"

:key="edu.title"

class="item"

>

<h3>

{{edu.title}}

</h3>

<p>

{{edu.date}}

</p>

<p>

{{edu.organization}}

</p>

</div>

</div>

</div>

</section>

<! =================================>
</div>

</section>


</template>

<style scoped>

.study{

padding:140px 0;

}

.container{

width:min(900px,92%);

margin:auto;

}

.title{

text-align:center;

margin-bottom:60px;

}

.title h1{

font-size:56px;

margin-bottom:12px;

}

.title p{

color:var(--sub);

}

.card{

padding:42px;

border-radius:32px;

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

}

.head{

display:flex;

justify-content:space-between;

align-items:center;

}

.small{

font-size:13px;

color:var(--sub);

margin-bottom:8px;

}

.head h2{

margin:0;

}

.head a{

padding:12px 20px;

border-radius:999px;

background:

rgba(
255,
132,
198,
0.12
);

}

.desc{

margin:

40px 0;

line-height:1.8;

}

.topics{

display:flex;

flex-wrap:wrap;

gap:10px;

margin-bottom:40px;

}

.topics span{

padding:

10px 16px;

border-radius:

999px;

background:

rgba(
255,
132,
198,
0.1
);

}

.ideas{

padding-top:20px;

border-top:

1px solid
var(--border);

}

ul{

padding-left:20px;

line-height:2;

}

@media(
max-width:700px
){

.title h1{

font-size:40px;

}

.head{

flex-direction:column;

gap:20px;

align-items:flex-start;

}

}

/* ============ 자격증 =============== */


.career{

margin-top:40px;

}

.career h2{

margin-bottom:24px;

}

.career-list{

display:grid;

gap:20px;

}

.career-card{

padding:28px;

border-radius:24px;

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

}
.type{

display:inline-block;

font-size:14px;

font-weight:600;

letter-spacing:.5px;

margin-bottom:24px;

color:var(--sub);

padding-bottom:8px;

border-bottom:

1px solid
var(--border);

}

.item:not(:last-child){

margin-bottom:24px;

}

.item h3{

margin-bottom:8px;

}

.item p{

margin:4px 0;

color:var(--sub);

}
</style>