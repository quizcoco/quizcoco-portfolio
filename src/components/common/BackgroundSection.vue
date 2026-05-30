// 배경이미지 적용 - 프로젝트 디테일 페이지에서 활용
<script setup>

defineProps({

image:String,
pixel: Boolean,

fade:{

type:Boolean,

default:true

}

})

const fadeValue = (fade) => (fade ? 1 : 0)


</script>

<template>

<section
class="bg"  :class="{ pixel }"
:style="{

backgroundImage:

`url(${image})`

}"
>

<div class="overlay">

<slot/>

</div>

</section>

</template>

<style scoped>

.bg{

position:relative;

min-height:100vh;

background-size:cover;

background-position:center;

background-repeat:no-repeat;

overflow:hidden;

}

.overlay{

position:relative;

z-index:1;

}

.bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
}

.bg::after{

content:"";

position:absolute;

left:0;

right:0;

bottom:0;

height:260px;

background:

linear-gradient(

to bottom,

transparent,

var(--bg-gradient-end)


);

opacity: v-bind(fadeValue(fade));
}

</style>