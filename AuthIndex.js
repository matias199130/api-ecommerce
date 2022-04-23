var express = require('express');
var axios = require('axios');
// var port = process.env.PORT || 3001;
var oAuth = require('./middleware/oAuth.js');
var app = express();
const challengesAPIEndpoint = 'http://localhost:3001/challenges';
const { requiresAuth } = require('express-openid-connect');




app.use(oAuth);// esto no se esta EJECUTANDO
console.log('Soy AuthIndexxxx', oAuth);

app.get('/challenges', requiresAuth(), async (req, res) => {
	try {
		const { access_token } = req.oauth;

		const response = await axios({
			method  : 'get',
			url     : challengesAPIEndpoint,
			headers : { Authorization: `Bearer ${access_token}` }
		});
		res.json(response.data);
	} catch (error) {
		console.log(error);
		if (error.response.status === 401) {
			res.status(401).json('Unauthorized to access data');
		} else if (error.response.status === 403) {
			res.status(403).json('Permission denied');
		} else {
			res.status(500).json('Whoops, something went wrong');
		}
	}
});

// app.listen(port, () => console.log("Started"));

module.exports = app;