import * as Yup from 'yup';
import * as yup from 'yup';

export const loginValidations = Yup.ObjectSchema({
    email: yup.string().email("Invalid email").required("Email required"),
    password: yup.string().required('Password required')
})
