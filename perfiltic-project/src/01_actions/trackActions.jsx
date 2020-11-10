import * as actions from './utilities/track';

export const playTrack = (data) => {
    return async (dispatch) => {
      console.log(data, 'action');
      await actions.play_track(data.uri);
      dispatch({ type: 'PLAY_TRACK', data });
    }
  }
  
  export const pauseTrack = () => {
    return async (dispatch) => {
      await actions.pause_track();
      dispatch({ type: 'PLAY_TRACK', data: null });
    }
  }