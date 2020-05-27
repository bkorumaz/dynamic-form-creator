export const EMPTY_FORM = {
  name: "",
  description: "",
  createdAt: Date(),
  fields: [{ required: true, name: "", dataType: "STRING", id: 0}],
};

export const FORM_DATA = {
  formList: [
    {
      name: "Test form",
      description: "Uye bilgi formu",
      createdAt: "2017-01-08",
      fields: [
        { required: true, name: "Ad", dataType: "STRING" },
        { required: true, name: "Soyad", dataType: "STRING" },
        { required: false, name: "Yaş", dataType: "NUMBER" },
      ],
    },
  ],
};
