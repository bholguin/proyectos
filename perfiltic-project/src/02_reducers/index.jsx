import {combineReducers} from 'redux';
import auth from './loadReducer';
import user from './userReducer';
import playlist from './playlistReducer';
import modal from './modaltrackTeducer';

const rootReducer = combineReducers({
    auth,
    user,
    playlist,
    modal
});

export default rootReducer;