export default {
  email: {
    regEx: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
    error: 'Please enter a valid email',
  },
  noEmpty: {
    regEx: /^(?!\s*$).+/,
    error: 'Cannot be empty',
  },
  phone: {
    regEx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    error: 'Invalid Format: xxx-xxx-xxxx',
  },
}
