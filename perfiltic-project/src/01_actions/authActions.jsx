export const getToken = () => {
  return (dispatch) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code')
    const redirect_uri = 'http://localhost:3000';
    const client_id = '901177459e7245db8b4eb580076d41f6';
    const client_secret = '2f9dbef450e94d0d8187ac4ce258629f';

    let headers = {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }

    var r_body = {
      'code': code,
      'redirect_uri': redirect_uri,
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
      }).then(data => {
        console.log(data);
        dispatch({ type: 'LOAD_TOKEN', data });
        console.log(data.data);
      });
  }
};

