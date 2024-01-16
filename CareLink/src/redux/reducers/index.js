import {combineReducers} from "redux"
import authReducer from '../reducers/authReducer';

const rootReducers = combineReducers({
    auth : authReducer,
})
export default rootReducers