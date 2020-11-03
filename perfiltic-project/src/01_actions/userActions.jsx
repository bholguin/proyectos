
export const getInfo = () => {
    return (dispatch) => {
      const access_token = localStorage.getItem("token");
      var headers = { 'Authorization': 'Bearer ' + access_token }
      fetch('https://api.spotify.com/v1/me', { headers }).then(response => {
        return response.json().then(data => {
          return { status: response.status, data };
        })
      }).then(data => {
        dispatch({type: 'LOAD_USER', data});
      })
    }
  }