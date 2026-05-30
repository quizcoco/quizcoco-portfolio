<script setup>

import "./styles/global.css"
import "./styles/variables.css"

import AppHeader
from "./components/layout/AppHeader.vue"

import AppFooter
from "./components/layout/AppFooter.vue"

</script>

<template>

<AppHeader/>

<main>

<RouterView/>

</main>

<AppFooter/>


</template>

<style>

body{

margin:0;

font-family:sans-serif;

}

main{
    padding-top:80px;
    min-height:80vh;

}

</style>