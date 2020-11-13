import * as actions from './utilities/track';

export const playTrack = (data) => {
    return async (dispatch) => {
      console.log(data, 'action');
      actions.play_track(data.uri);
      dispatch({ type: 'PLAY_TRACK', data });
    }
  }
  
  export const pauseTrack = () => {
    return async (dispatch) => {
      actions.pause_track();
      dispatch({ type: 'PLAY_TRACK', data: null });
    }
  }