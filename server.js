var express = require('express');
var mongoose = require('mongoose');

// Sets the requirements to look at the config file
const config = require('./config/config');

// Pre-sets the deployment port
const port = process.env.PORT || 8080;

mongoose.connect(config.db_dev);
mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// API routes
require('./server/routes')(app);

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }

    console.info('>>> Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;