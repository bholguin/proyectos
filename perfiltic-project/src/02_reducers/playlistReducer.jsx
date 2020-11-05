const initialState = {
    playlist: [],
    errors: {},
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_PLAYLIST': 
            return {...state, playlist: action.data}
        default:
            return state;
    }
}