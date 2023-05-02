
import { combineReducers } from 'redux';
import shopReducers from '../reduxAction/Shop/shopReducer';


// create root reducers

const rootReducers = combineReducers({
    shop : shopReducers,
});

// export reducers

export default rootReducers;