const initialState = {
    open: false,
    data_list: {}
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, open: true, data_list: action.data_list }
        case 'CLOSE_MODAL':
            return { ...state, open: false }
        default:
            return state;
    }
}