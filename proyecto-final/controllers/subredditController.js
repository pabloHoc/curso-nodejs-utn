/**
 * METODOS
 * ===================================================================================
 * getAll:
 *      - debe renderizar el template con ruta "./subreddit/subreddit", con los siguientes valores: 
 *          info: subreddit
 *          posts: posts
 *          state: subscribed
 *          karma: karma
 *      - subscribed es true si el profile cuyo username viene en request.session.user
 *      contiene en su array subscribed el subreddit que viene en request.params.subreddit
 *      (utilizar el método includes para encontrar un item en un array)
 *      - posts son todos los documentos de la colección posts,
 *      filtrado por el campo subreddit con valor request.params.subreddit,
 *      sorteados dependiendo del valor que viene en request.query.sort
 *          - si es "top", el sort se realiza con el campo votes en orden descendente
 *          - si es "new", el sort se realiza con el campo time en orden descendente
 *          - si es "old", el sort se realiza con el campo time en orden ascendente
 *      - subreddit es el documento de la colección subreddits cuyo nombre viene dado en 
 *      request.params.subreddit. Si no se encuentra ese subreddit, debe renderizar la página error
 *      - karma es la suma de los campos karma_post y karma_comment del profile cuyo username
 *      viene en request.session.user, sino es 0
 *      - subscribed es el valor del campo subscribed del profile cuyo username
 *      viene en request.session.user, sino es undefined
 * ===================================================================================
 * getPost:
 *      - debe renderizar el template con ruta "./post", con los siguientes valores: 
 *          info: info
 *          post: post
 *          state: subscribed
 *          karma: karma
 *          comments: comments
 *      - subscribed es true si el profile cuyo username viene en request.session.user
 *      contiene en su array subscribed el subreddit que viene en request.params.subreddit
 *      (utilizar el método includes para encontrar un item en un array)
 *      - comments son todos los documentos de la colección comments,
 *      filtrado por el campo ref con valor ObjectId(request.params.id) (es decir, los comentarios
 *      que tengan por referencia el id del post),
 *      sorteados dependiendo del valor que viene en request.query.sort
 *          - si es "top", el sort se realiza con el campo votes en orden descendente
 *          - si es "new", el sort se realiza con el campo time en orden descendente
 *          - si es "old", el sort se realiza con el campo time en orden ascendente
 *      - post es el documento de la colección posts cuyo id viene dado en 
 *      request.params.id. Si no se encuentra ese subreddit, debe renderizar la página error
 *      - karma es la suma de los campos karma_post y karma_comment del profile cuyo username
 *      viene en request.session.user, sino es 0
 *      - subscribed es el valor del campo subscribed del profile cuyo username
 *      viene en request.session.user, sino es undefined
 * ===================================================================================
 * subscribe:
 *      - debe actualizar el profile cuyo username viene dado en request.session.user,
 *      pusheando al campo subscribed el valor que viene en request.params.subreddit, y
 *      devolver por respuesta "success!"
 * ===================================================================================
 * unsubscribe:
 *      - idem anterior, pero debe pullear en vez de pushear el subreddit
 * ===================================================================================
 * checkSubrredit:
 *      - debe chequear si el subreddit que viene en request.params.subrreddit existe,
 *      si lo hace, debe devolver una respuesta con true, y si no, con false
 */ 