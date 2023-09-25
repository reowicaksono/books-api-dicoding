const Hapi = require("@hapi/hapi");
const {Routes} = require('./ro/routes_books');
const {BASEURL, PORT} = require('./utils/app_const');

const init = async () => {
    const server = Hapi.server({
       port: PORT,
       host: BASEURL,
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