import * as actions from './utilities/load';

export const loadData = () => {

  return async (dispatch) => {
    const access_token = localStorage.getItem("token");
  
    if (!access_token) {
      const response_token = await actions.fetch_token();
      const data_token = await response_token.json()
      dispatch({ type: 'LOAD_USER_TOKEN', data: data_token });
    }

    const { Player } = await actions.load_sdk_spotify();
    await actions.connect_sdk_spotify(Player);

    const response_user = await actions.fetch_user();
    const data_user = await response_user.json();
    dispatch({ type: 'LOAD_USER', data: data_user });

    const response_playlist = await actions.fetch_playlist(data_user.id);
    const data_playlist = await response_playlist.json();

    if (data_playlist.items) {
      data_playlist.items.map(async item => {
        if (item.tracks) {
          const response_tracks = await actions.fetch_playlist_tracks(item.tracks.href);
          const data_trcks = await response_tracks.json();
          data_trcks.items.map(item =>{
            return item['play_track'] = false;
          })
          item['tracks_playlist'] = data_trcks.items;
        }
      })
    }

    console.log(data_playlist.items)
    dispatch({ type: 'LOAD_PLAYLIST', data: data_playlist.items });
  }
}




