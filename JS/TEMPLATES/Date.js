function relojMovement (){

const reloj = document.getElementById('digital-clock')
const fecha = document.getElementById('digital-date')
const frase = document.getElementById('digital-frase')


function addZero(time){
    if(time < 10){
        return '0' + time
    }
    return time
}

function addFrase (n){
    if(new Date > n){

    }

}
// CALENDARIO
const calen = new Date()
let dia = calen.getDate()
let mes = calen.getMonth() + 1
let año = calen.getFullYear()

dia = addZero(dia)
mes = addZero(mes)
año = addZero(año)

fecha.innerHTML = `${dia}/${mes}/${año}`
setInterval(() =>{
    // RELOJ
const calendar = new Date()
let hora = calendar.getHours()
let minuto = calendar.getMinutes()
let segundo = calendar.getSeconds()

hora = addZero(hora)
minuto = addZero(minuto)
segundo = addZero(segundo)

if(hora >= 21){
    frase.innerHTML = 'Buenas noches ! No son horas de seguir programando deberías irte a dormir'
} 

else if (hora >= 17 ){
    frase.innerHTML = 'Buenas tardes ! No todo va a ser programar, un poco de gym o socializar tampoco esta mal'
}
else if (hora >= 13 ){
    frase.innerHTML = 'Hora de comer ! Te vendría bien descansar un poco'
}

else if (hora >= 7 ){
    frase.innerHTML = 'Buenos dias ! Cafelito y a programar esos commits no se van a hacer solos'
}
reloj.innerHTML = `${hora}:${minuto}:${segundo}`
}, 1000)
} 

relojMovement()

