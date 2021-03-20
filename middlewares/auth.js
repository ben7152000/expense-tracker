const checkAuthenticator = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  req.flash('warning_msg', '請先登入才能使用！')
  res.redirect('/users/login')
}

const checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return res.redirect('/restaurants')
  next()
}

module.exports = { checkAuthenticator, checkNotAuthenticated }
