const initialState = {
    isAuthenticated: false,
    data: {},
    errors: {},
};


export default function auth(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_USER_TOKEN': 
            localStorage.setItem("token", action.data.access_token);
            return {...state, data: action.data, isAuthenticated: true}
        case 'LOGIN_SUCESS':
            return {...state, isAuthenticated: true}
        default:
            return state;
    }
}
