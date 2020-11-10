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