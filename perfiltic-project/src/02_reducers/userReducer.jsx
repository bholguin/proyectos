const initialState = {
    data: {},
    isAuthenticate: false,
    errors: {},
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_USER': 
            return {...state, data: action.data, isAuthenticate: true}
        default:
            return state;
    }
}