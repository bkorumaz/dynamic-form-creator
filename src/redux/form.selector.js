import { createSelector } from "reselect";

const selectFormList = (state) => state.formList;

export const selectCollection = (formUrlParam) =>
  createSelector([selectFormList], (forms) =>
  forms ? forms[formUrlParam] : null
  );
