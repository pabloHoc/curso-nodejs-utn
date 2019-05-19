/**
 * METODOS
 * ===================================================================================
 * edit:
 *      - debe obtener el post con id que viene en request.params.id y actualizar
 *      su campo body con el valor de request.body.text
 *      - debe mandar como respuesta "success"
 * ===================================================================================
 * delete:
 *      - debe eliminar el post con id que viene en request.params.id
 *      - debe mandar como respuesta "ok"
 * ===================================================================================
 * save:
 *      - debe actualizar el profile cuyo username está guardado en request.session.user,
 *      agregando el id del post que viene en request.params.id al campo saved_post.
 *      Dado que es un array, para agregar el id utilizamos el comando de mongodb $push
 *      - debe mandar como respuesta "success"
 * ===================================================================================
 * unsave:
 *      - lo mismo que save, pero en vez de $push usa $pull
 * ===================================================================================
 * vote
 *      - si el valor de request.body.action es "increment", debe obtener el profile cuyo
 *      username está guardado en request.body.user, e incrementarle el campo karma_post
 *      en 1, también debe incrementarle en 1 el campo votes del comentario cuyo id viene en
 *      request.params.id
 *      - si el varlor de request.body.action es "decrement", debe hacer lo mismo que lo anterior,
 *      pero restando 1 en vez de incrementar
 *      - debe mandar como respuesta "ok"
 */