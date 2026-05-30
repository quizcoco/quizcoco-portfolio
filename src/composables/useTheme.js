import {ref} from "vue"

const dark=
ref(

localStorage.getItem(
"dark"
)==="1"

)

export function useTheme(){

function toggle(){

dark.value=
!dark.value

document.documentElement
.classList.toggle(
"dark"
)

localStorage.setItem(

"dark",

dark.value
?1
:0

)

}

return{

dark,

toggle

}

}