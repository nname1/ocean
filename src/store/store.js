import {createStore} from 'redux';
import {changeStep} from '../reducer/reducer';

let store = createStore(changeStep);

export default store;