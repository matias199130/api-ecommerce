//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

var express = require('express');
var app = express();
var { expressjwt: jwt } = require("express-jwt");
var jwks = require('jwks-rsa');
var guard = require('express-jwt-permissions')()

// var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://agustingalvan02.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3001',
    issuer: 'https://agustingalvan02.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/challenges', guard.check(['read:challenges']), function (req, res) {
    res.json({challenger1 : "this is challnege one", challenger2 : "this is another challenge", });
});

// app.listen(port);


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
