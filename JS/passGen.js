const upper = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const lower ='abcdefghijklmnñopqrstuvwxyz';
const number ='123456789';
const characters ='!@#$%^&*()-_=+'; 
const btnGen = document.getElementById('gen');
const result = document.getElementById('passResult');

btnGen.addEventListener('click', ()=>{
    const allCharacters = upper + lower + number + characters;
    let password = ''
    const inputName = document.getElementById('length')
    const valor = inputName.value;
if(valor < 12 || valor > 50){
        result.innerHTML = `<h2>Ha habido un problema</h2>`
    }
    else {
        for(let i = 0; i <= valor ; i++){
        
            const passGen = Math.floor(Math.random() * allCharacters.length)
            password += allCharacters[passGen]
                }
        
                result.innerHTML = `<h2>Contraseña generada:<br>${password}</h2>`
            }
        })