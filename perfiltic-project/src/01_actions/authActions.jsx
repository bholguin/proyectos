import * as actions from './utilities';

export const loadData = () => {

  return async (dispatch) => {
    const access_token = localStorage.getItem("token");

    if (!access_token) {
      const response_token = await actions.fetch_token();
      const data_token = await response_token.json()
      dispatch({ type: 'LOAD_USER_TOKEN', data: data_token });
    }

      const connect_sdk = actions.connect_sdk_spotify();
      await connect_sdk();

    

    const response_user = await actions.fetch_user();
    const data_user = await response_user.json();
    dispatch({ type: 'LOAD_USER', data: data_user });

    const response_playlist = await actions.fetch_playlist(data_user.id);
    const data_playlist = await response_playlist.json();

    if (data_playlist.items) {
      data_playlist.items.map(async item => {
        if(item.tracks){
          const response_tracks = await actions.fetch_playlist_tracks(item.tracks.href);
          const data_trcks = await response_tracks.json();
          item['tracks_playlist']=data_trcks.items;
        }
      })
    }

    dispatch({ type: 'LOAD_PLAYLIST', data: data_playlist.items });
  }
}

export const playTrack = (uri) => {
  return async (dispatch) => {
    console.log(uri)
    const response_play_tracks = await actions.play_track(uri);
    const data_trcks_play = await response_play_tracks;
    console.log(data_trcks_play);
    //dispatch({ type: 'CLOSE_MODAL' });
  }
}

export const closeModal = (id) => {
  return (dispatch) => {
    dispatch({ type: 'CLOSE_MODAL' });
  }
}

export const openModal = (data_list) => {
  return (dispatch) => {
    dispatch({ type: 'OPEN_MODAL', data_list });
  }
}
