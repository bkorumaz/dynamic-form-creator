import { FORM_DATA } from "../data/forms.data";
import { FormListActions } from "./form.actions";

export const formReducer = (state = FORM_DATA, action) => {
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
