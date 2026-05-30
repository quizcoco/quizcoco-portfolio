export function reveal(el){

const io=
new IntersectionObserver(

([e])=>{

if(
e.isIntersecting
)

e.target.classList.add(
"show"
)

}

)

io.observe(el)

}