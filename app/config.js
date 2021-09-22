const DIR = __dirname;
const dotenv = require('dotenv');
dotenv.config();

let config = {
  dev: {
    stage: 'dev',
    baseUrl: process.env.BASE_URL,
    httpSchema: process.env.HTTP_SCHEMA,
    debug: (process.env.DEBUG||1),
    port: process.env.PORT,
    yamapApikey: process.env.YAMAP_APIKEY
     },

  prod:  {
    stage: 'prod',
    baseUrl: process.env.BASE_URL,
    httpSchema: process.env.HTTP_SCHEMA,
    debug: (process.env.DEBUG||1),
    port: process.env.PORT,
    yamapApikey: process.env.YAMAP_APIKEY
  }
}


module.exports = {config}
