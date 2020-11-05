const initialState = {
    playlist: [],
    tracks: [],
    errors: {},
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_PLAYLIST':
            return { ...state, playlist: action.data }
        case 'LOAD_PLAYLIST_TRACKS':
            return { ...state, playlist: action.data }
        default:
            return state;
    }
}