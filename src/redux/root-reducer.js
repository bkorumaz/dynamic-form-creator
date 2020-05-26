import { combineReducers } from "redux";
import { FormListActions } from "./form-list.actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FORM_DATA } from "../data/forms";
import transformFormsData from "../utils/form-data.util";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['formList'],
};

export const createForm = (formObject) => {
  return {
    type: "CREATE_FORM",
    payload: formObject,
  };
};

const formReducer = (state = FORM_DATA, action) => {
  switch (action.type) {
    case FormListActions.CREATE_FORM:
      return {
        ...state,
        formList: [...state.formList, action.payload],
      };
    default:
      return state;
  }
};


// COMBINE REDUCERS
const rootReducer = combineReducers({
  formList: formReducer,
});

export default persistReducer(persistConfig, rootReducer);
