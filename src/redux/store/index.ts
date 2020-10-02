import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { themeReducer } from '../reducers/popularReducer';

const store = createStore(themeReducer, composeWithDevTools());

export default store;