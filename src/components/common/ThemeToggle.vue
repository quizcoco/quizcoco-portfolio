<script setup>

import {
useTheme
}

from
"../../composables/useTheme"

const{

toggle,
dark

}
=
useTheme()

</script>

<template>

<button
class="theme"
@click="toggle"
:class="{

active:
dark

}"
>

<div
class="thumb"
>

{{

dark

?

"🌙"

:

"☀️"

}}

</div>

</button>

</template>

<style scoped>

.theme{

width:64px;

height:36px;

padding:4px;

border:none;

border-radius:999px;

cursor:pointer;

position:relative;

transition:.3s;

background:

linear-gradient(
135deg,
#ffe5f2,
#fff7fb
);

}

.theme.active{

background:

linear-gradient(
135deg,
#444,
#222
);

}

.thumb{

position:absolute;

top:4px;

left:4px;

width:28px;

height:28px;

border-radius:50%;

background:white;

display:flex;

align-items:center;

justify-content:center;

transition:.25s;

}

.theme.active
.thumb{

left:32px;

}

</style>