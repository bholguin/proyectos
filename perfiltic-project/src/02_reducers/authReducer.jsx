const initialState = {
    token: localStorage.getItem("token"),
    data: {},
    errors: {},
};


export default function auth(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TOKEN': 
            localStorage.setItem("token", action.data.token);
            return {...state, data: action.data}
        default:
            return state;
    }
}
