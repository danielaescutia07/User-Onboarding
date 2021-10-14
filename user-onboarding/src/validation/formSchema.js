import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(5, 'Name must be 5 or more characters long!'),
    email: yup
        .string()
        .trim()
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required!'),
    terms: yup
        .boolean()
        .required()
        .oneOf([true], 'Terms of Service is required!')
})

export default formSchema;