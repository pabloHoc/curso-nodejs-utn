/**
METODOS
===================================================================================
posts:
     - debe renderizar el template con ruta "./profile/profile_posts", con los siguientes valores: 
         profile_user: user
         posts: posts
         subscribed: subscribed
         karma: karma
         created: created
     - en created va:
         let d = new Date(account.created);
         created = d.toLocaleDateString().replace(/\//g, '-');
     donde account es el documento de la colección accounts cuyo username viene en 
     request.session.user. Si no se encuentra la cuenta perteneciente a dicho usuario, debe
     renderizar la página error         
     - user es el valor que viene en request.params.user
     - posts son todos los documentos de la colección posts, filtrados por el campo
     username con el valor que viene dado en request.params.user, sorteados dependiendo
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
comments:
     - debe renderizar el template con ruta "./profile/profile_comments", con los siguientes valores: 
         profile_user: user
         comments: comments
         subscribed: subscribed
         karma: karma
         created: created
     - idem anterior, a excepcion de comments
     - para comments hacemos:

       collection.aggregate([{
                $match: {
                    username: request.params.user
                }
            },
            {
                $sort: sort
            },
            {
                $lookup: {
                    from: "posts", // Colección en la que buscamos
                    localField: "ref", // Campo en nuestra colección
                    foreignField: "_id", // Campo de referencia
                    as: "parent" // Campo a agregar
                }
            }
        ]).toArray();

       donde collection es la colleción de comentarios. Lo que estamos haciendo
       es buscar todos los comentarios en dicha colección, que tengan el username correspondiente,
       y agregarle como dato a cada documento el campo "parent", que va a tener la referencia al documento
       de la colección "posts" cuyo id sea el mismo que esté guardado en el campo ref del comentario (es decir,
       el post al que pertenece)
===================================================================================
saved_posts:
     - debe renderizar el template con ruta "./profile/profile_saved_posts", con los siguientes valores: 
         profile_user: user
         posts: savedPosts
         subscribed: subscribed
         karma: karma
         created: created
    - los requerimientos son los mismo que para el método posts, a excepción de
    savedPosts, que son todos aquellos documentos de la colección posts cuyo id se 
    encuentra dentro del array del campo saved_posts del profile cuyo
    username viene dado en request.params.user. Para esto, usamos la instrucción de mongodb
    $in, que nos permite matchear en nuestra query aquellos documentos cuyo valor del campo que estamos
    buscando se encuentre en algún array, por ejemplo:

    collection.find({_id: {
        $in: savedPostsArray
    }}).sort(sort).toArray()
===================================================================================
saved_comments:
     - debe renderizar el template con ruta "./profile/profile_saved_comments", con los siguientes valores: 
         profile_user: user
         comments: savedComments
         subscribed: subscribed
         karma: karma
         created: created
    - idem anterior, a excepcion de que en savedComments necesitamos
    hacer un aggregate como hicimos en el método comments, incluyendo en nuestra instrucción
    $match que el campo _id se encuentre en el array de comentarios guardados del profile
    
    collection.aggregate([{
                $match: {
                    username: req.params.user,
                    _id: {
                        $in: savedCommentsIds
                    }
                }
            },
            {
                $sort: sort
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "ref",
                    foreignField: "_id",
                    as: "parent"
                }
            }
        ]).toArray()
*/ 