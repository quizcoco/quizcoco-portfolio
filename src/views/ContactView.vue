<template>

<section class="contact">

<div class="container">

<div class="title">

<h1>

Contact

</h1>

<p>

문의 주시는 곳입니다

</p>

</div>

<div class="card">
    <h2>김유나</h2>

<div class="item">
    <span class="label">GitHub</span>
    <p>github.com/quizcoco</p>
</div>

<div class="item">
    <span class="label">Email</span>
    <p> k.yuna.dev@gmail.com </p>
</div>

</div>

</div>

</section>

</template>

<style scoped>

.contact{

padding:

140px 0;

}

.container{

width:

min(
700px,
92%
);

margin:

auto;

}

.title{

text-align:

center;

margin-bottom:

50px;

}

.title h1{

font-size:

56px;

margin-bottom:

10px;

}

.title p{

color:

var(--sub);

font-size:

18px;

}

.card{

padding:

42px;

border-radius:

32px;

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

.item{

padding:

22px 0;

}

.item:not(:last-child){

border-bottom:

1px solid
var(--border);

}

.label{

display:block;

font-size:

14px;

color:

var(--sub);

margin-bottom:

8px;

}

.item p{

font-size:

22px;

margin:0;

}

@media(
max-width:700px
){

.title h1{

font-size:

40px;

}

.card{

padding:

28px;

}

.item p{

font-size:

18px;

}

}

</style>