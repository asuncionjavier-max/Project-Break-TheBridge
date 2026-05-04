function relojMovement (){

const reloj = document.getElementById('digital-clock')
const fecha = document.getElementById('digital-date')

// CALENDARIO
const calen = new Date()
let dia = calen.getDate()
let mes = calen.getMonth() + 1
let año = calen.getFullYear()

fecha.innerHTML = `${dia}/${mes}/${año}`
console.log(dia, + mes, + año)


setInterval(() =>{
const calendar = new Date()
// RELOJ
let hora = calendar.getHours()
let minuto = calendar.getMinutes()
let segundo = calendar.getSeconds()

if(segundo < 10){
    segundo = '0' + segundo
}

if( minuto < 10){
    minuto = '0' + minuto
}

if( hora < 10){
    hora = '0' + hora
}

reloj.innerHTML = `${hora}:${minuto}:${segundo}`
}, 1000)
} 

relojMovement()