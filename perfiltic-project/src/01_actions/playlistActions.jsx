
export const getPlaylist = (id) => {
    return (dispatch) => {
        console.log(id)
      const access_token = localStorage.getItem("token");
      var headers = { 'Authorization': 'Bearer ' + access_token }
      fetch('https://api.spotify.com/v1/users/'+id+'/playlists', { headers }).then(response => {
        return response.json().then(data => {
          return { status: response.status, data };
        })
      }).then(res => {
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: 'LOAD_PLAYLIST', data: res.data });
        }
      })
    }
  }