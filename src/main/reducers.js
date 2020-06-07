import { combineReducers } from 'redux';
import reducer from '../pages/reducer';

const rootReducer = combineReducers({ player: reducer });

export default rootReducer;