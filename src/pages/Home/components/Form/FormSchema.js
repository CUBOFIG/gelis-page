import * as Yup from 'yup';

const initialValues = { link: '' };

const FormSchema = Yup.object({
  link: Yup.string()
    .matches(/(tiktok.com)/, "Envia un link de tiktok culero")
    .required("El link es requerido culero.")
})

export { initialValues, FormSchema };
