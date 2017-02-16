
export const validate = values => {
  const errors = {};
  const {email, password, passwordConfirm} = values;
  if (!values.email) {
    errors.email = "Please enter an email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or less";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation";
  } else if (values.passwordConfirm.length < 8) {
    errors.passwordConfirm = "Must be 8 characters or less";
  }
  if(password && passwordConfirm && password !== passwordConfirm) {
    errors.password = "Passwords do not match";
  }
  return errors;
};
