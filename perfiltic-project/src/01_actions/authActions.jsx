import {constan} from '../00_utilities/constant';

export const getToken = () => {

  return (dispatch) => {
    const access_token = localStorage.getItem("token");
    if (access_token) {
      dispatch({ type: 'LOGIN_SUCESS' });
    } else {

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

      formBody = formBody.join("&");

      fetch('https://accounts.spotify.com/api/token', { headers, body: formBody, method: 'POST' })
        .then((body, response) => {
          return body.json().then(data => {
            return { status: body.status, data };
          })
        }).then(res => {
          if (res.status === 200) {
            dispatch({ type: 'LOAD_USER_TOKEN', data: res.data });
          }
        });
    }
  }
};

