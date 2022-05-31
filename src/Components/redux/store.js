import { createStore,combineReducers } from "redux";
import { loginReducer } from './loginReducer'
import { postsReducer } from "./postsReducer";
import { userProfileReducer } from "./userProfilReducer";

// const reducers = combineReducers({ videoReducer, registationReducer });

// export const store = createStore(reducers);


export const store = createStore(combineReducers({loginReducer,postsReducer,userProfileReducer}),
(localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {})

store.subscribe(() => {
	localStorage['redux-store'] = JSON.stringify(store.getState());
});
