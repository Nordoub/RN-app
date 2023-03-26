export default {
  email: {
    required: true,
    maxLength: {
      value: 255,
      message: "More than 255 characters is not allowed.",
    },
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Please enter a valid email address.",
    },
  },
  password: {
    required: true,
    maxLength: {
      value: 255,
      message: "More than 255 characters is not allowed.",
    },
    minLength: { value: 4, message: "Less than 4 characters is not allowed." },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^+=]{8,}$/,
      message:
        "Password must be atleast 8 characters long and must contain atleast one letter and one number.",
    },
  },
};
