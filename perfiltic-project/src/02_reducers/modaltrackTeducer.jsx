const initialState = {
    open: false
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, open: true }
        case 'CLOSE_MODAL':
            return { ...state, open: false }
        default:
            return state;
    }
}