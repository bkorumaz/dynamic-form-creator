export const FormListActions = {
  CREATE_FORM: "CREATE_FORM",
};

export const createForm = (formObject) => {
  return {
    type: "CREATE_FORM",
    payload: formObject,
  };
};