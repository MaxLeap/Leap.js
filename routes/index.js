var app_config = require('../config/app.json');
var server_config = require('../config/server.json');
module.exports = function(app){

    app.get('/:module',function(req,res) {
        res.render(server_config['views_prefix'] + req.params.module, app_config);
    });
};