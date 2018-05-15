var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Sets the requirements to look at the config file
const config = require('./server-config');

// Pre-sets the deployment port
const port = process.env.PORT || 3100;

mongoose.connect(config.db_dev);
mongoose.Promise = global.Promise;

const app = express();
// app.use(express.urlencoded({ extend: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Cross Origin Resource Sharing (CORS)
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});

// API routes
require('./server/routes')(app);

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }

    console.info('>>> Node Server is running on http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;