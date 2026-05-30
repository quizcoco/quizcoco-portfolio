<template>

<div class="grid">

<slot/>

</div>

</template>

<style scoped>

.grid{

display:grid;

gap:24px;

grid-template-columns:

repeat(

auto-fit,

minmax(

350px,

1fr

)

);

}

</style>