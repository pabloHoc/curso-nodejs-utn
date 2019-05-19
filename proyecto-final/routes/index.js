/** 
RUTAS POSTS
    - RUTA: '/edit/post/:id'
    - METODO: PUT
    - CONTROLADOR: postController.edit

    - RUTA: '/delete/post/:id'
    - METODO: DELETE
    - CONTROLADOR: postController.delete

    - RUTA: '/save/post/:id'
    - METODO: PUT
    - CONTROLADOR: postController.save

    - RUTA: '/unsave/post/:id'
    - METODO: PUT
    - CONTROLADOR: postController.unsave

    - RUTA: '/vote/post/:id'
    - METODO: PUT
    - CONTROLADOR: postController.vote


RUTAS COMETARIOS
    - RUTA: '/edit/comment/:id'
    - METODO: PUT
    - CONTROLADOR: commentController.edit

    - RUTA: '/delete/comment/:id'
    - METODO: DELETE
    - CONTROLADOR: commentController.delete

    - RUTA: '/save/comment/:id'
    - METODO: PUT
    - CONTROLADOR: commentController.save

    - RUTA: '/unsave/comment/:id'
    - METODO: PUT
    - CONTROLADOR: commentController.unsave

    - RUTA: '/vote/comment/:id'
    - METODO: PUT
    - CONTROLADOR: commentController.vote


SUBBREDDIT ROUTES
    - RUTA: '/submit/check/:subreddit'
    - METODO: GET
    - CONTROLADOR: subredditController.checkSubreddit

    - RUTA: '/subscribe/:subreddit'
    - METODO: PUT
    - CONTROLADOR: subredditController.subscribe
    
    - RUTA: '/unsubscribe/:subreddit'
    - METODO: PUT
    - CONTROLADOR: subredditController.unsubscribe

*/