export const transformFormsData = (forms) => {
  const transformedData = forms.map((form) => {
    const { name } = form;
    return {
      ...form,
      routeName: encodeURI(name.toLowerCase()),
    };
  });

  return transformedData;
};
