import { constan } from '../../00_utilities/constant';
import { Buffer } from 'buffer';

export const fetch_playlist_tracks = (url) => {
  const access_token = localStorage.getItem("token");
  var headers = { 'Authorization': 'Bearer ' + access_token }
  const options = { headers }
  return fetch(url, options)
}

export const fetch_playlist = (id) => {
  const access_token = localStorage.getItem("token");
  var headers = { 'Authorization': 'Bearer ' + access_token }
  const options = { headers }
  const url = 'https://api.spotify.com/v1/users/' + id + '/playlists';
  return fetch(url, options)
}


export const fetch_user = () => {
  const access_token = localStorage.getItem("token");
  const headers = { 'Authorization': 'Bearer ' + access_token }
  const options = { headers }
  const url = 'https://api.spotify.com/v1/me';
  return fetch(url, options);
}


export const load_sdk_spotify = () => {
  return new Promise(resolve => {
    if (window.Spotify) {
      resolve(window.Spotify);
    } else {
      return window.onSpotifyWebPlaybackSDKReady = () => {
        resolve(window.Spotify);
      }
    }
  })
}

export const connect_sdk_spotify = (Player) => {
  const access_token = localStorage.getItem("token");
  const sdk = new Player({
    nombre: "Web Playback SDK",
    volumen: 1.0,
    getOAuthToken: callback => { callback(access_token); }
  });
  sdk.connect();
}


export const fetch_token = () => {
  const access_token = localStorage.getItem("token");
  if (!access_token) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');

    const buff = Buffer.from(constan.client_id + ':' + constan.client_secret).toString('base64');

    let headers = {
      'Authorization': 'Basic ' + buff,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }

    var r_body = {
      'code': code,
      'redirect_uri': constan.redirect_uri,
      'grant_type': 'authorization_code'
    };

    var formBody = [];
    for (var detail in r_body) {
      var encodeKey = encodeURIComponent(detail);
      var encodeValue = encodeURIComponent(r_body[detail]);
      formBody.push(encodeKey + "=" + encodeValue);
    }
    const url = 'https://accounts.spotify.com/api/token';
    formBody = formBody.join("&");
    const options = { headers, body: formBody, method: 'POST' }

    return fetch(url, options);
  }
}
