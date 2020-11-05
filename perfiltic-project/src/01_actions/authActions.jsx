import { constan } from '../00_utilities/constant';

export const getToken = () => {

  return async (dispatch) => {
    const access_token = localStorage.getItem("token");

    if (!access_token) {
      const response_token = await fetch_token();
      const data_token = await response_token.json()
      dispatch({ type: 'LOAD_USER_TOKEN', data: data_token });
    }

    const response_user = await fetch_user();
    const data_user = await response_user.json();
    dispatch({ type: 'LOAD_USER', data: data_user });

  }
}


function fetch_user() {
  const access_token = localStorage.getItem("token");
  const headers = { 'Authorization': 'Bearer ' + access_token }
  const options = { headers }
  const url = 'https://api.spotify.com/v1/me';
  return fetch(url, options);
}


function fetch_token() {
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

