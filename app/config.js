const DIR = __dirname;
const dotenv = require('dotenv');
dotenv.config();

let config = {
  dev: {
    stage: 'dev',
    debug: (process.env.DEBUG||1),
    port: process.env.PORT,
    TGApikey: process.env.TG_APIKEY
     },

  prod:  {
    stage: 'prod',
    debug: (process.env.DEBUG||1),
    port: process.env.PORT,
    TGApikey: process.env.TG_APIKEY
  }
}


module.exports = {config}
