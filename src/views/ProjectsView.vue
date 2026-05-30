<script setup>

import projects
from "../data/projects"

import ProjectGrid
from
"../components/project/ProjectGrid.vue"

import ProjectCard
from
"../components/project/ProjectCard.vue"

</script>

<template>

<div
class="container section"
>

<h1>

PROJECTS

</h1>

<ProjectGrid>

<ProjectCard

v-for="p in projects"

:key="p.id"

:project="p"

/>

</ProjectGrid>

</div>

</template>

