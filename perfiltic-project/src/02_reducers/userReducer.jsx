const initialState = {
    data: {},
    errors: {},
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_USER': 
            return {...state, data: action.data}
        default:
            return state;
    }
}