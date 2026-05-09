const btnCity = document.getElementById('send-city')
const inputCity = document.getElementById('value-city')

btnCity.addEventListener('click', async function getClima(){
    // VALOR DEL FORM
    const cityName = inputCity.value

    if (!cityName) {
        alert("Por favor, escribe una ciudad");
        return;
    }
// API Y APIKEY
    const key = '546cedeac0ff4190a19202648261704'
    const wheather = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}&days=1&aqi=no`

        const res = await fetch(wheather)
        const data = await res.json()

        if (data.error) {
            alert("Ciudad no encontrada");
            return;
        }
        // DOM
        
        const city =document.getElementById('ciudad-pais')
        const temperatura =document.getElementById('temperatura')
        const icon =document.getElementById('icon-clima')
        const descript =document.getElementById('descript')
        const horas = document.getElementById('time-horas')
        let hours = ''
        
        const climaHours = data.forecast.forecastday[0].hour
        climaHours.forEach((hora) =>{ 
        const solohora = hora.time.split(' ')[1]
        hours +=
        `<div>
        <ul>
        <li><img src="https:${hora.condition.icon}">
        <p>Hora: ${solohora}</p>
        <p>Temperatura: ${hora.temp_c}ºC</p>
        <p>Probabilidad de lluvia: ${hora.chance_of_rain}%</p>
        </li>
        <hr>
        </ul>
        </div>`})

         
        city.innerHTML = `📍${data.location.name},${data.location.country}`
        temperatura.innerHTML = `Temperatura: ${data.current.temp_c}`
        icon.src = `https:${data.current.condition.icon}` 
        horas.innerHTML = hours;
}
)

