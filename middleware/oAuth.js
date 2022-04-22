var axios = require("axios");

const tokenEndpoint = "https://agustingalvan02.us.auth0.com/oauth/token";

oAuth = (req, res, next) => {// No estan llegando  req query???
    console.log("SOY oAuth!!!!!!!!!")
    var code = req.query.code;
    
    if(!code) {
    res.status(401).send("Missing authorization code");
  }

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("client_id", "qaRhzPHcWUNMuMvLzcKa94t4WxMvdvYK");
  params.append("client_secret", "kx0jrSHJTQe4NlSyIc7CcpX1mUq7uN9mxNw_Y-AxJlwmQz-kgFEX_GlaHJ0kq7qG")
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:3000/challenges");

  axios.post(tokenEndpoint, params)
  .then(response => {
    req.oauth = response.data;
    next();
  })
  .catch(err => {
    console.log(err);
    res.status(403).json(`Reason: ${err.message}`);
  })
}

module.exports = oAuth;