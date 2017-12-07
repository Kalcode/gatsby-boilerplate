var PHONE = ['TODO', 'TODO', 'TODO']
var EMAIL = 'TODO'

var config = {
  // Required info for schema
  email: EMAIL,
  logo: 'TODO',
  name: 'TODO',
  legal_name: 'TODO',
  url: 'https://TODO.com',
  phone: PHONE.join('-'),

  // Required address object for schema
  address: {
    street: 'TODO',
    city: 'TODO',
    state: 'TODO',
    zipcode: 'TODO',
    directions: 'TODO',
    country: 'TODO',
    area: '',
  },

  // Useful adds
  mailto: `mailto:` + EMAIL,
  tel: 'tel:' + PHONE.join(''),

  // Social Media
  googlePlus: 'https://plus.google.com',
  medium: 'https://medium.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  twitter_id: '',

  // Analytics codes
  googleAnalytics: 'UA-TODO-XX',

  // Font codes
  typekit: '',
}

module.exports = config
