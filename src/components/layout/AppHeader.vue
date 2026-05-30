<script setup>

import {ref, onMounted, onUnmounted} from "vue"

import {useTheme} from "../../composables/useTheme"

import ThemeToggle from "../common/ThemeToggle.vue"

const { toggle } =
useTheme()

const hide =
ref(false)

let last =
0

function handleScroll(){

const current =
window.scrollY

if(
current > last &&
current > 100
){

hide.value =
true

}
else{

hide.value =
false

}

last =
current

}

onMounted(()=>{

window.addEventListener(
"scroll",
handleScroll
)

})

onUnmounted(()=>{

window.removeEventListener(
"scroll",
handleScroll
)

})

</script>

<template>

<header
:class="{

hide

}"
>

<div class="container row">

<div>

YUNA

</div>

<nav>

<RouterLink to="/">
HOME
</RouterLink>

<RouterLink to="/projects">
PROJECTS
</RouterLink>

<RouterLink to="/study">
STUDY
</RouterLink>

</nav>
<ThemeToggle/>

</div>

</header>

</template>

<style scoped>

header{

position:fixed;

top:0;

left:0;

right:0;

height:80px;

z-index:1000;

transition:

transform .3s;

background:

rgba(
255,
255,
255,
0.75
);

backdrop-filter:

blur(
16px
);

border-bottom:

1px solid
var(--border);

}

header.hide{

transform:

translateY(
-100%
);

}

.row{

height:100%;

display:flex;

align-items:center;

justify-content:space-between;

}

nav{

display:flex;

gap:30px;

}

a{

text-decoration:none;

}

</style>