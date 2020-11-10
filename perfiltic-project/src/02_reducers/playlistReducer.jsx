const initialState = {
    playlist: [],
    _playlist: {},
    track: {},
    errors: {},
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_PLAYLIST':
            return { ...state, playlist: action.data }
        case 'GET_PLAYLIST':
            return {...state, _playlist: action.data}
        case 'PLAY_TRACK':
            const payload = state.playlist.map(item => {
                item.tracks_playlist.map(item => {
                    if(action.data !==null && item.track.uri === action.data.uri){
                        item.play_track = true;
                    }else{
                        item.play_track = false;
                    }
                    return item;
                })
                return item;
            });
            return { ...state,  playlist: payload, track: action.data}
        default:
            return state;
    }
}