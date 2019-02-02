const getWildShapes = require('./src/api/druidWildShapeView');

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');

const server = Hapi.server({ port: 3000 });
const routes = [
    {
        method: 'GET',
        path: '/wildshapes/{level}',
        handler: getWildShapes
    },
    {
        method: 'GET',
        path: '/wildshapes',
        handler: (request) => 'Get your wildshapes here!'
    },
    {
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: Path.join(__dirname, 'build'),
                index: ['index.html']
            }
        }
    }
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
