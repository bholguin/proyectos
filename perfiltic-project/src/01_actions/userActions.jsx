
export const getInfo = () => {
  return (dispatch) => {
    const access_token = localStorage.getItem("token");
    const headers = { 'Authorization': 'Bearer ' + access_token }
    const options = {headers}
    const response = fetch_info(options);
    response.then(data => {
      dispatch({ type: 'LOAD_USER', data });
    })
  }
}

async function fetch_info(options) {
  const response = await fetch('https://api.spotify.com/v1/me', options);
  return await response.json();
}