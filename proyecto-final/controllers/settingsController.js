/**
METODOS
===================================================================================
view:
    - debe renderizar el template con ruta "./settings", con los valores
        karma: karma
    donde karma es la suma de los valores de los campos karma_post y karma_comment del
    profile cuyo username viene dado en request.session.user, SI el metodo
    request.isAuthenticated es true
    - si no lo es, debe renderizar "./login"
===================================================================================
changePassword:
    - debe hashear con bcrypt la contraseña que viene en request.body.password,
    y actualizar el campo password del documento de la colección accounts cuyo username viene dado en 
    request.session.user con dicho hash
    - luego, debe enviar como respuesta "OK"
===================================================================================
deleteAccount:
    - debe eliminar el documento de la colección accounts cuyo username viene
    dado en request.session.user
    - luego, debe enviar como respuesta "OK"                
*/