const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/validate','/order/*', { target: 'http://localhost:8080/' }));
};