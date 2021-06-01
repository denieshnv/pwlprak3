export default {
  general: {
    missing: 'It is should not be empty..',
    invalid: 'Something is wrong..'
  },

  type: {
    text: {
      missing: 'It is should not be empty..',
    },
    email: {
      missing: 'It is should not be empty..',
      invalid: 'Seems like its not an email'
    },
    password: {
      rule: {
        capitalLetter: 'At least one capital letter is needed',
        oneNumber: 'At least one number is needed',
        oneSymbol: 'At least one symbol is needed',
        minLength: 'Password should at least 8 characters length'
      }
    }
  },

  name: {
    confirmPassword: {
      rule: {
        matches: 'The password is not the same'
      }
    }
  }
}
