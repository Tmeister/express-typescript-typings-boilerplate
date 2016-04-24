/// <reference path='./typings/main.d.ts' />

import * as http from 'http';
import * as url  from 'url';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorHandler from 'errorhandler';

let app = express();

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let env = process.env.NODE_ENV || 'development';
let port = process.env.PORT || 3000;

if (env === 'development') {
    app.use(errorHandler());
} else if (env === 'production') {
    // TODO have more senseful error handler
}

app.get('/', function (req:express.Request, res:express.Response) {
    res.json('Hallo!!!!');
});

app.listen(port, function () {
    console.log('Demo Express server listening on port %d in %s mode', port, app.settings.env);
});