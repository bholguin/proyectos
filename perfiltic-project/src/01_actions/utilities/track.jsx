export const play_track = (uri) => {
    const access_token = localStorage.getItem("token");
    const device_id = localStorage.getItem("_spharmony_device_id");
    const headers = { 'Authorization': 'Bearer ' + access_token }
    const options = { headers, method: 'PUT', body: JSON.stringify({ uris: [uri] }) }
    const url = 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id;
    return fetch(url, options);
  }
  
  export const pause_track = (uri) => {
    const access_token = localStorage.getItem("token");
    const device_id = localStorage.getItem("_spharmony_device_id");
    const headers = { 'Authorization': 'Bearer ' + access_token }
    const options = { headers, method: 'PUT' }
    const url = 'https://api.spotify.com/v1/me/player/pause?device_id=' + device_id;
    return fetch(url, options);
  }