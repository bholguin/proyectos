
export const getPlaylist = (id) => {
  return (dispatch) => {
    console.log(id)
    const access_token = localStorage.getItem("token");
    var headers = { 'Authorization': 'Bearer ' + access_token }
    const options = {headers}
    const response = fetch_pleylist(id, options);
    response.then(data => {
      dispatch({ type: 'LOAD_PLAYLIST', data });
    })
  }
}

async function fetch_pleylist(id, options) {
  const response = await fetch('https://api.spotify.com/v1/users/' + id + '/playlists', options)
  return await response.json();
}