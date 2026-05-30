import {createRouter,createWebHistory} from "vue-router"

import Home from "../views/HomeView.vue"
import About from "../views/AboutView.vue"
import Projects from "../views/ProjectsView.vue"
import Detail from "../views/ProjectDetailView.vue"
import Skills from "../views/SkillsView.vue"
import Study from "../views/StudyView.vue"
import Contact from "../views/ContactView.vue"

export default createRouter({

history:createWebHistory(import.meta.env.BASE_URL),
// vite.config.js에서 base: "/quizcoco-portfolio/" 설정이 있었는데, 라우터가 이 경로를 인식하지 못했음.
//  import.meta.env.BASE_URL을 명시하면 Vite가 자동으로 base 경로를 전달해줌.
routes:[

{
path:"/",
component:Home
},

{
path:"/about",
component:About
},

{
path:"/projects",
component:Projects
},

{
path:"/projects/:id",
component:Detail
},

{
path:"/skills",
component:Skills
},

{
path:"/study",
component:Study
},

{
path:"/contact",
component:Contact
}

],

scrollBehavior(){

return{

top:0,

behavior:"smooth"

}

}


});

