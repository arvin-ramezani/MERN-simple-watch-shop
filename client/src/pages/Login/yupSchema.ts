import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required!"),
  lastname: yup.string(),
  username: yup.string().min(4).required("User Name is required!"),
  email: yup
    .string()
    .email("Please enter correct email address")
    .required("Email is required!"),
  password: yup.string().min(8).required("Password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "*Passwords does not match"),
});

export const loginSchema = yup.object().shape({
  username: yup.string().min(4).required("Please Enter Username"),
  password: yup.string().min(8).required("Password is required!"),
  isAdmin: yup.boolean(),
});
