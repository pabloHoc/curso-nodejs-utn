# Curso Node.js UTN #

Repositorio para el código del curso de Node.js

Para clonar:

* Descargar git https://gitforwindows.org/
* Abrir Git BASH
* Con cd ir moviéndose al directorio donde queremos clonar el repositorio, ej. ```cd Documents```
* Clonar el repositorio: 
```
  git clone https://github.com/pabloHoc/curso-nodejs-utn.git
``` 
<br/>

Para actualizar los cambios

* Con cd ir moviéndose al directorio donde queremos tenemos clonado el repositorio, ej. ```cd Documents```
* Traer los últimos cambios: 
```
  git pull
``` 

Ojo que si tenemos algo modificado en el repositorio, al traer los cambios se van a pisar y es probable que se borren las cosas que hicimos, (si hicimos algo) o que nos de un conflicto. En ese caso, lo mejor es antes de hacer ```git pull```, copiar los archivos modificados a una nueva carpeta, fuera del repositorio, y luego en el repositorio hacer:
 
```
  git reset --hard
  git pull
``` 

## intronode

* Moverse a la carpeta del proyecto, por ejemplo ```cd Documents/curso-nodejs-utn/intronode```
* Ejecutar el programa con el parámetro ```node app.js --help``` para ver los comandos disponibles 
<br/>

## animalsapi

* Moverse a la carpeta del proyecto, por ejemplo ```cd Documents/curso-nodejs-utn/animalsapi```
* Instalar las dependencias con ```npm install```
* Inicializar el server con ```node app.js```
* Con Postman (https://www.getpostman.com/downloads/), crear una nueva request teniendo como endpoint ```localhost:3000/api/v1/animals```, para obtener todos los animales en la db 
<br/>

## animalsmiddleware

* Moverse a la carpeta del proyecto, por ejemplo ```cd Documents/curso-nodejs-utn/animalsmiddleware```
* Instalar las dependencias con ```npm install```
* Inicializar el server con ```node app.js```
* Con Postman (https://www.getpostman.com/downloads/), crear una nueva request teniendo como endpoint ```localhost:3000/api/v1/animals```, para obtener todos los animales en la db 
<br/>

## animalsdb

* Moverse a la carpeta del proyecto, por ejemplo ```cd Documents/curso-nodejs-utn/animalsdb```
* Instalar las dependencias con ```npm install```
* Inicializar el server con ```node app.js```
* Con Postman (https://www.getpostman.com/downloads/), crear una nueva request teniendo como endpoint ```localhost:3000/api/v1/animals```, para obtener todos los animales en la db 
