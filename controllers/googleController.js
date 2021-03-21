// passport
const passport = require('passport')

// google auth
const googleController = {
  googleAuthenticator:
    passport.authenticate('google', { scope: ['email'] }),
  googleCallback:
    passport.authenticate('google', {
      successRedirect: '/records',
      failureRedirect: '/users/login'
    })
}

module.exports = googleController
