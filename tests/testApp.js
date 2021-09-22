const DIR = __dirname;
const config = require(DIR + '/../app/config').config[process.env.NODE_ENV||'dev'];
const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;


require('promise.prototype.finally').shim();


it("Get hello world", function(done) {
    
    axios.get(config.httpSchema + config.baseUrl + ':' + config.port)
    .then((resp)=>{
        console.log(resp.data);
        assert.deepEqual(resp.data,'Hello world!')
        done();
    })
    .catch((err)=>{
        done(err);
    })
})
