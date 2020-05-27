import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { formReducer } from './form.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['formList'],
};


// COMBINE REDUCERS
const rootReducer = combineReducers({
  formList: formReducer,
});

export default persistReducer(persistConfig, rootReducer);
