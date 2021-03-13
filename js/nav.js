let btnBurguer = document.getElementById("btnBurguer")
let menu= document.getElementById("miMenu")
btnBurguer.addEventListener('click',function(){
    menu.classList.toggle("activo")
},false)