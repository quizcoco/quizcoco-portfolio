<script setup>

import { computed } from "vue"
import { useRoute } from "vue-router"
import projects from "../data/projects"
import ProjectHero from "../components/project/ProjectHero.vue"
import ProjectFeature from "../components/project/ProjectFeature.vue"
import ProjectProblem from "../components/project/ProjectProblem.vue"
import ProjectArchitecture from "../components/project/ProjectArchitecture.vue"
import ProjectUrl from "../components/project/ProjectUrl.vue"
import Reveal from "../components/effects/Reveal.vue"
import BackgroundSection from "../components/common/BackgroundSection.vue"


const route=
useRoute()

const project = computed(() =>
  projects.find(v => String(v.id) === route.params.id)
)

</script>

<template>

<div
v-if="project"
>

<BackgroundSection
  :image="project?.bg"
  :pixel="project?.id === 1">

<ProjectHero
:title="project.title"
:sub="project.summary"
/>


<! ============== URL =================>
<Reveal>
<ProjectUrl :urls="project?.urls"/>
</Reveal>
</BackgroundSection>

<div
class="container"
>
<! ======= 스택 ============ >

<section
class="box"
>

<h2>

기술

</h2>

<div
class="stack"
>

<span

v-for="s in project.stack"

>

{{s}}

</span>

</div>

</section>

<! ========= 기능 =========== >
<ProjectFeature :items="project.features"/>
<ProjectArchitecture :items="project.techniques"/>

<! ========= 문제해결 ================>
<ProjectProblem :problems="project.problems"/>

</div>

</div>

</template>

<style scoped>

.box{

padding:40px;

border-radius:24px;

margin-bottom:30px;

background:

var(--card);

}

.stack{

display:flex;

gap:10px;

flex-wrap:wrap;

}

.stack span{

padding:10px;

border-radius:999px;


background:

rgba(
255,
132,
198,
0.12
);

}

.pixel {
  image-rendering: pixelated;
}

</style>