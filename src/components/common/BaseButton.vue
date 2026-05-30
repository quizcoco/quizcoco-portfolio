<script setup>

defineProps({
to:String
})

</script>

<template>

<RouterLink
v-if="to"
:to="to"
class="btn"
>

<slot/>

</RouterLink>

<button
v-else
class="btn"
>

<slot/>

</button>

</template>

<style scoped>

.btn{

display:inline-flex;

align-items:center;

justify-content:center;

padding:14px 26px;

border-radius:999px;

background:var(--primary);

border:none;

font-weight:700;

transition:.2s;

}

.btn:hover{

transform:
translateY(-2px);

}

</style>