// passport
const passport = require('passport')

// facebook auth
const facebookController = {
  facebookAuthenticator:
    passport.authenticate('facebook', { scope: ['email', 'public_profile'] }),
  facebookCallback:
    passport.authenticate('facebook', {
      successRedirect: '/records',
      failureRedirect: '/users/login'
    })
}

module.exports = facebookController
