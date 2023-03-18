export default {
  email: {
    required: true,
    maxLength: 255,
    pattern:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  password: {
    required: true,
    maxLength: 255,
    minLength: 4,
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^+=]{8,}$/,
  },
};
