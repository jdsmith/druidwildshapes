const getWildShapes = require('./src/api/druidWildShapeView');
const getWildShapeDetails = require('./src/api/wildShapeDetailsView');

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');

const server = Hapi.server({
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'build')
        }
    },
    port: 3000,
    host: 'localhost'
});
const routes = [
    {
        method: 'GET',
        path: '/api/wildshapes/{level}',
        handler: getWildShapes
    },
    {
        method: 'GET',
        path: '/api/wildshape/{id}',
        handler: getWildShapeDetails
    },
    {
        method: 'GET',
        path: '/wildshapes/{path*}',
        handler: {
            file: 'index.html'
        }
    }, 
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    },
];

const start = async () => {

    await server.register(Inert);
    server.route(routes);
    await server.start(err => {
        if (err) {
            throw err;
        }
    });
    console.log(`Server running at ${server.info.uri}`);
};

start();
