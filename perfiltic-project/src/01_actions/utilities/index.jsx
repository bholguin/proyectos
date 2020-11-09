import { constan } from '../../00_utilities/constant';

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

export const play_track = (uri) => {
  const access_token = localStorage.getItem("token");
  const device_id = localStorage.getItem("_spharmony_device_id");
  const headers = { 'Authorization': 'Bearer ' + access_token }
  const options = { headers, method: 'PUT', body: JSON.stringify({ uris: [uri] }) }
  const url = 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id;
  return fetch(url, options);
}


export async function connect_sdk_spotify () {
  return window.onSpotifyWebPlaybackSDKReady = () => {
    const access_token = localStorage.getItem("token");
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(access_token); }
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    player.connect();
  };

}


export const fetch_token = () => {
  const access_token = localStorage.getItem("token");
  if (!access_token) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');

    let headers = {
      'Authorization': 'Basic ' + (new Buffer(constan.client_id + ':' + constan.client_secret).toString('base64')),
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
