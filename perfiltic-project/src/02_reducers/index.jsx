import {combineReducers} from 'redux';
import auth from './authReducer';
import user from './userReducer';
import playlist from './playlistReducer';

const rootReducer = combineReducers({
    auth,
    user,
    playlist
});

export default rootReducer;