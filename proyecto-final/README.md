# Proyecto final
Realización del backend de un clon de reddit utilizando las tecnologías y contenidos dados en el curso: node.js, express.js y mongo.db

### Características:

* Frontpage
* Subreddits
* Enviar comentarios, posts y links
* Votar posts y comentarios
* Guardar posts y comentarios 
* Editar posts y comentarios
* Borrar posts y comentarios
* Subscribirse a subreddits
* Búsqueda
* Sorting
* Página de perfil
* Sistema de karma
* Login / Registro
* Change contraseña / borra contraseña

### Estructura del proyecto:

* app.js: punto de inicio de nuestro servido
* colecciones.md: detalle de las colecciones a utilizar en el proyecto con el nombre de sus campos
* views: templates de las páginas a ser renderizadas desde el lado del servidor
* routes: rutas y endpoints de la aplicación
* public: archivos css, js e imágenes utilizados en el front
* middlewares: middlewares utilizados en la aplicación
* controllers: lista de controladores utilizados por los router

### Consigna:

* Instalar dependencias con npm init
* Analizar la estructura del proyecto y los archivos que incluye para irnos familiarizando con ellos
* Leer colecciones.md y tenerlo de referencia a la hora de trabajar con las colecciones
* Crear la carpeta db, con los archivos db.js y collections.js
* En db.js, crear una clase para obtener la conexión a mongodb
* En collections.js, exportar un objeto con los nombres de las colecciones
* Ir leyendo los archivos de controllers e ir completandolos de a poco siguiendo las instrucciones y requerimientos que están detallados como comentarios en el mismo archivo. Analizar detenidamente lo que se está pidiendo y tratar de tener en claro qué es lo que se pretende hacer antes de empezar a escribir el código 
* Ir completando las rutas con el router de express
* Completar el middleware requerido
* Incluir los routers exportados en app.js
* IMPORTANTE!: Encarar un método de controlador y una ruta a la vez, probarla y chequear que funcione, y luego pasar a la siguiente, no intentar hacer todo a la vez!
* Utilizar sintaxis de ES6 (let, const, funciones flechas, async/await, clases, métodos estáticos)
* Ser prolijo con la indentación del código y utilizar nombres adecuados para las variables
* Incluir comentarios en el código cuando lo consideren oportuno o necesario



