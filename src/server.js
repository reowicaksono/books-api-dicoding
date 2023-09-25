const Hapi = require("@hapi/hapi");
const {Routes} = require('./ro/routes_books');

const init = async () => {
    const server = Hapi.server({
       port: 9000,
       host: 'localhost',
       routes: {
        cors: {
          origin: ["*"],
        },
      }, 
    });

    await server.route(Routes);
    await server.start();

    console.log(`Server running on ${server.info.uri}`);
}

init();