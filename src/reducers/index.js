import { combineReducers} from 'redux';
import postReducers from './postsReducer';
import userReducers from './usersReducer';



export default combineReducers({
posts:postReducers
});