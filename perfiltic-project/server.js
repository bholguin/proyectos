const express = require('express')
const app = express()
const port = 5000
var cors = require('cors');
const path = require("path");

app.use(cors());

app.set('app', './src');
const redirect_uri = 'http://localhost:3000';
const client_id = '901177459e7245db8b4eb580076d41f6';

app.get("/", (req, res) => {

    const scopes = 'user-read-private user-read-email streaming user-modify-playback-state user-read-playback-state';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + client_id +
        '&scope=' + scopes +
        '&redirect_uri=' + redirect_uri);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})