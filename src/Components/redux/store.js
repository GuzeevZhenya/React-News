import { createStore,combineReducers } from "redux";
import {loginReducer} from './loginReducer'

// const reducers = combineReducers({ videoReducer, registationReducer });

// export const store = createStore(reducers);


export const store = createStore(combineReducers({loginReducer}),
(localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {})

store.subscribe(() => {
	localStorage['redux-store'] = JSON.stringify(store.getState());
});

console.log(store)
