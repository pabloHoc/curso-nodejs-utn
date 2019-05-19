/** 
RUTAS
    - RUTA: '/:user/posts'
    - METODO: GET
    - CONTROLADOR: profileController.posts

    - RUTA: '/:user/comments'
    - METODO: GET
    - CONTROLADOR: profileController.comments

    - RUTA: '/:user/saved/posts'
    - METODO: GET
    - CONTROLADOR: profileController.savedPosts
    
    - RUTA: '/:user/saved/comments'
    - METODO: GET
    - CONTROLADOR: profileController.savedComments

    - RUTA: '/:user/saved/comments'
    - METODO: GET
    - ACCION: redireccionar a /u/${request.params.user}/posts

    - RUTA: '/:user/saved/comments'
    - METODO: GET
    - ACCION: redireccionar a /u/${request.params.user}/saved/posts
*/


