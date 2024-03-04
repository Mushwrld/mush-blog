let navToggleE1 = document.querySelector('.nav-toggle')
let navMenuList = document.querySelector('.collapes-menu')

navToggleE1.addEventListener('click', ()=>{
   // console.log('menu btn clicked')
   //navMenuList.style.visibility = 'visible'

   navMenuList.classList.toggle('visible')
})