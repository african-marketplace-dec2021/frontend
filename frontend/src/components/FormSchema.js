import * as yup from "yup";

const formSchema = yup.object().shape({
  fullname: yup
    .string()
    .required('Full name is required!')
    .min(2, "Full name must be at least 2 characters!"),
  email: yup
    .string()
    .email('Must enter a valid email address!')
    .required('Must enter an email address!'),
  username: yup
    .string()
    .required('Username is required!')
    .trim()
    .min(5, "Username must be at least 5 characters!"),
  password: yup
    .string()
    .required('Password is required!')
    .min(5, 'Password must be at least 5 characters!')
});



export default formSchema;