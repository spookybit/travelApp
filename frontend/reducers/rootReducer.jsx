import {combineReducers} from 'redux';
import SessionReducer from '../components/session/sessionReducer';

const rootReducer = combineReducers({
  session: SessionReducer
})

export default rootReducer;
