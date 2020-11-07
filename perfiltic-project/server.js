const express = require('express')
const app = express()
const port = 5000
var cors = require('cors');
const path = require("path");
var querystring = require('querystring');

app.use(cors());

app.set('app', './src');
const redirect_uri = 'http://192.168.1.3:3000';
const client_id = '901177459e7245db8b4eb580076d41f6';
const client_secret = '2f9dbef450e94d0d8187ac4ce258629f';

app.get("/", (req, res) => {

    const scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + client_id +
        '&scope=' + scopes +
        '&redirect_uri=' + redirect_uri);

        console.log('ingreso a callback', req.query)
});


  app.get('/refresh_token', function(req, res) {

    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
      form: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      },
      json: true
    };
  
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.send({
          'access_token': access_token
        });
      }
    });
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})