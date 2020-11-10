import * as actions from './utilities/track';

export const playTrack = (uri) => {
    return async (dispatch) => {
      await actions.play_track(uri);
      //dispatch({ type: 'CLOSE_MODAL' });
    }
  }
  
  export const pauseTrack = () => {
    return async (dispatch) => {
      await actions.pause_track();
      //dispatch({ type: 'CLOSE_MODAL' });
    }
  }