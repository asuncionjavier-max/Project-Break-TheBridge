# Dashboard Personalizable - Project Break The Bridge
Hola!! 

Este es un proyecto realizado para practicar y consolidar mis conocimientos de HTML, CSS y JavaScript.

* La idea es crear un panel de control funcional capaz de generar:
* Imagenes aleatorias en el fondo de pantalla cada 15s con un array y Math.floor(Math.random())
* Contraseñas aleatorias en las que tu decidas cuantos caracteres quieres y que tengan mayusculas, minusculas, numeros y caracteres especiales con Math.floor(Math.random()).
* Una librería donde guardar links de interes capaz de mantenerlos independientemente de cerrar la ventana con LocalStorage.
* Añadír un reloj y ponerlo en funcionamiento con new Date y SetInterval.
* Consumir datos reales de una API y añadir una barra de busqueda donde puedas buscar el tiempo de la ciudad que a ti se te ocurra.


## 🛠️ Tecnologías utilizadas

* HTML5: Estructura semántica.
* CSS3: Diseño responsivo utilizando Flexbox, además de efectos de transparencia (Glassmorphism).
* JavaScript: Manipulación del DOM, uso de `fetch` para APIs, eventos de escucha y manejo de `localStorage`.
* GitHub Pages: Para el despliegue del proyecto online.

## 🧠 Cosas que aprendí en este proyecto

Este proyecto me sirvió para enfrentarme a retos reales:
1. **Manejo de APIs:** Entender cómo funcionan las promesas (`async/await`) y cómo tratar los datos que vienen en formato JSON.
2. **Persistencia de datos:** Usar el `localStorage` para que la lista de enlaces del usuario se mantenga guardada sin necesidad de una base de datos.
3. **Organización de código:** Separar la lógica en diferentes archivos `.js` para que el proyecto sea más fácil de leer y mantener.
4. **Rutas en GitHub Pages:** Aprender la diferencia entre rutas absolutas y relativas para que las imágenes y estilos carguen correctamente en el servidor.

## 🔧 Instalación

Si quieres probarlo en local:
1. Clona el repositorio: `git clone https://github.com/tu-usuario/nombre-del-repo.git`
2. Abre el archivo `index.html` en tu navegador.
