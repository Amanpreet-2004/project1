
import { createStore } from 'redux';
import { RegisterReducer } from '../Reducer/userReducer'


const store = createStore(RegisterReducer);
export default store;