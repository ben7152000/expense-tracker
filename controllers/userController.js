const User = require('../models/user')
const bcrypt = require('bcryptjs')
const passport = require('passport')

const userController = {

  // 登入頁面
  loginPage: (req, res) => {
    res.render('../views/users/login')
  },

  // 登入檢查
  login: (req, res) => {
    passport.authenticate('local', {
      successRedirect: '/records',
      failureRedirect: '/users/login'
    })(req, res)
  },

  // 註冊頁面
  registerPage: (req, res) => {
    res.render('../views/users/register')
  },

  // 註冊使用者資料
  register: async (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    }
    const errors = []
    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      errors.push({ message: '所有欄位都是必填。' })
      return res.render('../views/users/register', { errors, user })
    }
    if (!user.email.match(/.+@.+\..+/)) {
      errors.push({ message: '請填入正確的信箱' })
      return res.render('../views/users/register', { errors, user })
    }
    if (user.password !== user.confirmPassword) {
      errors.push({ message: '密碼與確認密碼不相符！' })
      return res.render('../views/users/register', { errors, user })
    }
    try {
      const getUser = await User.findOne({ email: user.email })
      if (getUser) {
        errors.push({ message: '這個帳號已經註冊過了。' })
        console.log('User already exists')
        return res.render('../views/users/register', { errors, getUser })
      }
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(getUser.password, salt)
      User.create({
        name: getUser.name,
        email: getUser.email,
        password: hashPassword
      })
      res.redirect('login')
    } catch (e) {
      console.log(e)
      res.render('../views/error/index')
    }
  },

  // 登出
  logout: (req, res) => {
    req.logout()
    req.flash('success_msg', '你已經成功登出。')
    res.redirect('/users/login')
  }
}

module.exports = userController
