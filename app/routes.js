var Link            = require('../models/link');

module.exports = function(app) {



    app.use(function(req, res, next) {
        //console.log('something is happening!');
        next();
    });


    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/links', function(req, res) {
        // use mongoose to get all nerds in the database
        Link.find(function(err, links) {

            //console.log('In routes.js - find');

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(links);
            res.end();
        });
    });

    // route to handle creating goes here (app.post)
    app.post('/api/links', function(req, res) {
        // console.log('In routes.js - post');
        var link = new Link();
        link.name = req.body.name;
        link.url = req.body.url;
        link.save(function(err) {
            if(err) {
                res.send(err);
            }
            res.json({message: 'Link Created!'});
            res.end();
        });
    });


    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};