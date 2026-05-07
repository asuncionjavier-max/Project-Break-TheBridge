import { relojMovement } from "./TEMPLATES/Date.js"
import { getClima } from "./TEMPLATES/Weather.js"
import {initLinks} from "./addLink.js"
import { passGenerator } from "./passGen.js"

const body = document.body
const imagenes = [
    './ASSETS/brian-mcgowan-nqX-s99wSvI-unsplash.jpg',
    './ASSETS/evgeniya-pron-aW_hvFsBlXs-unsplash.jpg',
    './ASSETS/flyd-3f_knnjHFIg-unsplash.jpg',
    './ASSETS/harrison-qi-ce-K_rj1P7U-unsplash.jpg',
    './ASSETS/logan-voss-TlsvyNK5s98-unsplash.jpg',
    './ASSETS/nasa-Q1p7bh3SHj8-unsplash.jpg',
    './ASSETS/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg',
    './ASSETS/vishnu-mohanan-pfR18JNEMv8-unsplash.jpg',
    './ASSETS/walkator-klMii3cR9iI-unsplash.jpg',
]

function randomizeImg(){
const imgRandom = Math.floor(Math.random()*imagenes.length)
const imagenSelect = imagenes[imgRandom]
body.style.backgroundImage = `url(${imagenes[imgRandom]})`
 }
setInterval(randomizeImg, 10000)

relojMovement()
getClima('Madrid')
initLinks()
passGenerator()