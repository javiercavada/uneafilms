**UneaFilms_Grupo7**

_Resumen_

Esta aplicacion web está implementada siguiendo una estructura cliente - servidor y empaquetada con Webpack.

Las dependencias de la aplicacion están gestionadas con el gestor de dependencias NPM.

El servidor está implementado utilizando Node.js y conforme a la arquitectura REST, se encarga de iniciar y escuchar al cliente.

El cliente está implementado utilizando React y contiene varias vistas navegables manejadas por un Router (SPA).

Los scripts se gestionan mediante un archivo package.json.

Para garantizar la calidad y formato del código se han usado las herramientas Eslint y Prettier.

El cliente implementa estilos usando CSS-en-JS y además incluye funcionalidades avanzadas de estilos (flexbox, etc).

La aplicacion hace uso de @babel para transpilar el codigo de ES6 A ES5 para que cualquier navegador pueda entenderlo.

_Estructura_

En nuestra aplicación podemos encontrar la siguiente estructura de carpetas:

UneaFilms_Grupo7/

README.md
package.json
.babelrc
.gitignore
package-lock.json
server.js
webpack.config.js

build/
index.bundle.js
index.html

node_modules/

dist/
main.js

src/
contacto.js
FilasPeliculas.js
peliculas.js
index.html
index.scss
variables.scss
UneaFilmsLOGO.png

_Intrucciones de despliegue_

--npm install--

Nos instalara todas las dependencias en local

--npm rum webpack--

Nos compilara el codigo y nos creara la carpeta dist

--npm start--

Se inicia el server.js, el cual se encarga de iniciar el cliente y escucha en localhost:8080
