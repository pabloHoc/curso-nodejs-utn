const router = {
    setRoutes(app, routes) {
        routes.forEach(route => {
            const middlewares = route.middlewares || [];
            switch(route.method) {
                case 'GET':
                    app.get(route.url, middlewares, route.controller);
                    break;
                case 'POST':
                    app.post(route.url, middlewares, route.controller);
                    break;
                case 'PUT':
                    app.put(route.url, middlewares, route.controller);
                    break;
                case 'DELETE':
                    app.delete(route.url, middlewares, route.controller);
                    break;
                default: 
                    break;                                                                                
            }
        });
    }
}

module.exports = router;