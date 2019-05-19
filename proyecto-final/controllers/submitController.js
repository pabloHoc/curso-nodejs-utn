/**
METODOS
===================================================================================
subredditPostView: (mostrar la vista de crear post desde subreddit)
    - debe renderizar el template con ruta "./subreddit/subreddit_post", si es "link", con los 
    siguientes valores:
        info: subreddit
        karma: karma
        state: subscribed
    - karma es la suma de los campos karma_comment y karma_post del profile cuyo
    username viene dado en request.session.user  
    - subscribed es true si el profile contiene el nombre del subreddit
    que viene dado request.params.subreddit, y false sino. Para esto, buscamos algun profile
    con filtro por subreddit y username, y si obtenemos un resultado, lo ponemos en true
    - subreddit es el documento de la colección subreddits cuyo campo name
    tiene el valor que viene dado en request.params.subreddit      
===================================================================================
subredditLinkView: (mostrar la vista de crear link desde subreddit)
    - idem anterior, pero deber renderizar "./subreddit/subreddit_link"
===================================================================================
subredditPost: (crear un post en un subreddit)
    - agrega a la colección de posts un documento con los siguientes valores:
            title: request.body.title
            body: request.body.body
            username: request.session.user
            type: "post"
            subreddit: request.params.subreddit
            time: new Date(Date.now()).toISOString()
            votes: 0
            num_of_comments: 0
    - y luego redireccionar a `/r/${request.params.subreddit`            
===================================================================================
subredditLink: (crear un link en un subreddit)
    - idem anterior, pero el type debe ser "link", y si el link que viene en el body es
    una imagen, debe ser "img". Para esto último, chequeamos
    
    request.body.link.match(/\.(jpeg|jpg|gif|png)$/) != null
===================================================================================
subredditSearch: (hacer una búsqueda en un subreddit)
    - debe renderizar el template con ruta "./subreddit/subreddit_search", con los 
    siguientes valores:
        info: subreddit,
        posts: result,
        karma: karma,
        state: subscribed,
        query: request.body.query
    - los valores subreddit, karma y subscribed son los mismos que el método 
    subredditPostView
    - result debe buscar los documentos de la colección "posts" con el siguiente query:
    collection.find({
        $and: [{
                subreddit: request.params.subreddit
            },
            {
                title: {
                    // Regex nos permite buscar documentos cuyo campo coincidan
                    // con una expresión regular, en este caso, simplemente, que contenga
                    // la palabra de la búsqueda en el título
                    $regex: '.*' + request.body.query + '.*',
                    $options: 'i'
                }
            }
        ]
    })
    .sort({
        votes: -1
    })
===================================================================================
frontPost: (crear un post desde la home)
    - idem al método subredditPost, sólo que el valor subreddit es el que viene dado
    en request.body.subreddit
    - debe redireccionar a `/r/${request.body.subreddit}/${doc.insertedId._id.toString()}/comments`
    donde doc.insertedId es el documento que acabamos de insertar (el método insertOne devuelve el 
    documento insertado, y podemos asignarlo a una variable)
===================================================================================
frontLink: (crear un link desde la home)
    - idem al método método anterior, sólo que para el valor del campo type del documento
    tomamos el mismo criterio en el método subredditLink
===================================================================================
subreddit: (crear un subreddit)
    - debe pushear al campo owned el subreddit que viene en request.body.subreddit, del 
    profile cuyo username viene en request.session.user
    - debe insertar un documento en la colección subreddits, con los siguientes valores
        name: req.body.subreddit
        description: req.body.description
    - debe redireccionar a `/r/${req.body.subreddit}`   
===================================================================================
frontSearch: (búsqueda desde el search)
    - debe renderizar el template "./front/front_search", con los siguiente valores:
        posts: result
        subreddits: subreddits
        subscribed: subscribed
        karma: karma
        query: request.body.query
    - karma es la suma de los campos karma_comment y karma_post del profile cuyo
    username viene dado en request.session.user        
    - subscribed es el valor del campo subscribed de dicho profile
    - subreddits es el conjunto de documentos de la colección subreddits
    - result es el conjunto documentos de la colección posts, filtrados por
        title: {
            $regex: '.*' + req.body.query + '.*',
            $options: 'i'
        }
    y sorteados según el campo votes en orden descendente
===================================================================================    
frontPostView: (mostrar vista de crear post desde página front)
    - debe renderizar el template "./front/front_post", con los siguiente valores:
        subscribed: subscribed
        karma: karma
    - karma es la suma de los campos karma_comment y karma_post del profile cuyo
    username viene dado en request.session.user        
    - subscribed es el valor del campo subscribed de dicho profile
===================================================================================    
frontLinkView: (mostrar vista de crear link desde página front)
    - idem anterior, pero debe renderizar el template con ruta "./front/front_link"
===================================================================================    
subredditView: (mostrar vista de crear subreddit)
    - idem anterior, pero debe renderizar el template con ruta "./front/front_subreddit"
*/