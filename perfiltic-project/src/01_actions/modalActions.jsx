export const closeModal = (id) => {
    return (dispatch) => {
      dispatch({ type: 'CLOSE_MODAL' });
    }
  }
  
  export const openModal = (data) => {
    return (dispatch) => {
      dispatch({type: 'GET_PLAYLIST', data });
      dispatch({ type: 'OPEN_MODAL' });
    }
  }