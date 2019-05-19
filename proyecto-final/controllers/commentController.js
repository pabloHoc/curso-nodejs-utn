/**
 * METODOS
 * ===================================================================================
 * comment: 
 *      - en req.params.id tenemos el id del post
 *      - obtener el post en la base de datos y actualizarlo sumándole
 *      1 al campo num_of_comments, con el comando de mongodb $inc, p.ej.:
 *          collection.updateOne({
 *              _id: ObjectId(request.params.id)
 *          }, {
 *              $inc: {num_of_comments: 1}
 *          })
 *      - agregar un comentario a la colección, con los siguientes valores:
 *          body: request.body.comment
 *          username: request.session.user
 *          ref: ObjectId(req.params.id)
 *          votes: 0
 *          time: new Date(Date.now()).toISOString()
 *      - redireccionar a /r/${request.params.subreddit}/${request.params.id}/comments
 * ===================================================================================
 * edit:
 *      - debe obtener el comentario con id que viene en request.params.id y actualizar
 *      su campo body con el valor de request.body.text
 *      - debe mandar como respuesta "success"
 * ===================================================================================
 * delete:
 *      - debe eliminar el comentario con id que viene en request.params.id, y actualizar
 *      la cantidad de comentarios en el post, cuyo id está guardado en el campo ref
 *      del comentario que se elimina, usando el comando de mongodb $inc, con -1
 *      - debe mandar como respuesta "ok"
 * ===================================================================================
 * save:
 *      - debe actualizar el profile cuyo username está guardado en request.session.user,
 *      agregando el id del comentario que viene en request.params.id al campo saved_comments.
 *      Dado que es un array, para agregar el id utilizamos el comando de mongodb $push, p.ej.:
 *      collection.updateOne({
 *          username: req.session.user
 *      }, {
 *          $push: {
 *              saved_comments: ObjectId(req.params.id)
 *          }
 *      });
 *      - debe mandar como respuesta "success"
 * ===================================================================================
 * unsave:
 *      - lo mismo que save, pero en vez de $push usa $pull
 * ===================================================================================
 * vote
 *      - si el valor de request.body.action es "increment", debe obtener el profile cuyo
 *      username está guardado en request.body.user, e incrementarle el campo karma_comment
 *      en 1, también debe incrementarle en 1 el campo votes del comentario cuyo id viene en
 *      request.params.id
 *      - si el valor de request.body.action es "decrement", debe hacer lo mismo que lo anterior,
 *      pero restando 1 en vez de incrementar
 *      - debe mandar como respuesta "ok"

 */