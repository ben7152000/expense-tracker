const User = require('../models/user')
const bcrypt = require('bcryptjs')
const passport = require('passport')

const userController = {

  // 登入頁面
  loginPage: (req, res) => {
    res.render('../views/users/login')
  },

  // 登入檢查
  login:
    passport.authenticate('local', {
      successRedirect: '/records',
      failureRedirect: '/users/login'
    }),

  // 註冊頁面
  registerPage: (req, res) => {
    res.render('../views/users/register')
  },

  // 註冊使用者資料
  register: async (req, res) => {
    const { name, email, password, confirmPassword } = req.body
    const errors = []
    if (!name || !email || !password || !confirmPassword) {
      errors.push({ message: '所有欄位都是必填。' })
    }
    if (!email.match(/.+@.+\..+/)) {
      errors.push({ message: '請填入正確的信箱' })
    }
    if (!password.match(/.{8,}/)) {
      errors.push({ message: '密碼需要8位' })
    }
    if (password !== confirmPassword) {
      errors.push({ message: '密碼與確認密碼不相符！' })
    }
    if (errors.length) {
      return res.render('../views/users/register', {
        errors,
        name,
        email,
        password,
        confirmPassword
      })
    }
    try {
      const user = await User.findOne({ email })
      if (user) {
        errors.push({ message: '這個帳號已經註冊過了。' })
        console.log('User already exists')
        return res.render('../views/users/register', {
          errors,
          name,
          email
        })
      }
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password, salt)
      User.create({
        name,
        email,
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
