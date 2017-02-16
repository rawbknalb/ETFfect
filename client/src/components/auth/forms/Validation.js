
export const validate = values => {
  const errors = {};
  const {email, password, passwordConfirm} = values;
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or less";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Required";
  } else if (values.passwordConfirm.length < 8) {
    errors.passwordConfirm = "Must be 8 characters or less";
  }
  if(password !== passwordConfirm) {
    errors.password = "Passwords do not match";
  }
  return errors;
};
