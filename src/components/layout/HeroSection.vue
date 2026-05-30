<script setup>

import hero from "../../assets/hero.png"
import Reveal from "../effects/Reveal.vue"



</script>

<template>


<section class="hero" :style="{backgroundImage:`url(${hero})`}">
<div class="overlay">

<Reveal>
<div class="content">

<h1 class="hero-title">
    <span>안녕하세요</span>
    <span class="name">백엔드 개발자 김유나입니다</span>
</h1>

<p>
Spring Boot 기반 웹 서비스를 개발하며 데이터 관리, 사용자 인증, 실시간 기능 구현 경험을 쌓았습니다.
<br><br>
기능 구현뿐만 아니라 계층별 책임 분리와 성능 개선을 중요하게 생각하며, 변경에 강한 구조를 만들기 위해 고민하는 백엔드 개발자입니다.

</p>

<RouterLink
to="/projects"
>

프로젝트 보기

</RouterLink>

</div>
</Reveal>

</div>
</section>

</template>

<style scoped>

.hero{

padding:
180px 0;

position:relative;

min-height:100vh;
overflow:hidden;

background-position:center top;
background-size:cover;
background-repeat:no-repeat;
image-rendering:pixelated;

}
/* 아래쪽 페이드 */

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}

.hero::after{

content:"";

position:absolute;

left:0;

right:0;

bottom:0;

height:240px;

background:

linear-gradient(

to bottom,

rgba(
255,
255,
255,
0
)

0%,

var(--bg-gradient-end)


100%

);

pointer-events:none;

}


/* 살짝 어둡게 */
.overlay{

min-height:100vh;

display:flex;

align-items:center;

padding:0 10%;




}

/* 글 */

.content{

max-width:700px;

color:white;
position:relative;

z-index:1;

}

.hero-title .name{
    white-space: nowrap;
}

.small{

font-size:18px;

letter-spacing:4px;

margin-bottom:30px;

}

h1{
    font-size:
    64px;
}
@media(max-width:900px){
    h1{
        font-size:48px;
    }
}


p{

font-size:
22px;

color:
var(--sub);

}

a{

display:inline-block;

margin-top:
40px;

padding:
14px 28px;

background:
var(--primary);

border-radius:
999px;

}

</style>