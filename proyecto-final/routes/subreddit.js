/** 
RUTAS POSTS
    - RUTA: '/:subreddit'
    - METODO: GET
    - CONTROLADOR: subredditController.getAll

    - RUTA: '/:subreddit/:id/comments'
    - METODO: GET
    - CONTROLADOR: subredditController.getPost

    - RUTA: '/:subreddit/submit/post'
    - METODO: GET
    - CONTROLADOR: submitController.subredditPostView

    - RUTA: '/:subreddit/submit/link'
    - METODO: GET
    - CONTROLADOR: submitController.subredditLinkView

    - RUTA: '/:subreddit/submit/post'
    - METODO: POST
    - CONTROLADOR: submitController.subredditPost

    - RUTA: '/:subreddit/:id/comments'
    - METODO: POST
    - CONTROLADOR: commentController.comment

    - RUTA: '/:subreddit/submit/link'
    - METODO: POST
    - CONTROLADOR: submitController.subredditLink

    - RUTA: '/:subreddit/search'
    - METODO: POST
    - CONTROLADOR: submitController.subredditSearch

    - RUTA: '/:subreddit/:id'
    - METODO: GET
    - ACCION: redireccionar a /r/${request.params.subreddit}/${request.params.id}/comments
*/
