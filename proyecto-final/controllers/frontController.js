/**
METODOS
===================================================================================
  getAll:
       - debe renderizar el template con ruta "./front/front", con los siguientes valores: 
           posts: posts
           subreddits: subreddits
           subscribed: subscribed
           karma: karma
       - posts son todos los documentos de la colección posts, sorteados dependiendo
       del valor que viene es request.query.sort
           - si es "top", el sort se realiza con el campo votes en orden descendente
           - si es "new", el sort se realiza con el campo time en orden descendente
           - si es "old", el sort se realiza con el campo time en orden ascendente
       - subreddits son todos los documentos de la colección subrredits
       - karma es la suma de los campos karma_post y karma_comment del profile cuyo username
       viene en request.session.user, sino es 0
       - subscribed es el valor del campo subscribed del profile cuyo username
       viene en request.session.user, sino es undefined
===================================================================================
 */ 