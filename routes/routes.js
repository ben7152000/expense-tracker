// modules
const express = require('express')
const router = express.Router()

// controller
const userController = require('../controllers/userController')
const recordController = require('../controllers/recordController')
const facebookController = require('../controllers/facebookController')
const googleController = require('../controllers/googleController')

// middleware
const { checkAuthenticator, checkNotAuthenticated, checkAccount } = require('../middlewares/auth')

// home
router.get('/', (req, res) => res.redirect('/users/login'))

// record
router.get('/records', checkAuthenticator, recordController.getRecords)
router.get('/records/create', checkAuthenticator, recordController.createRecordPage)
router.post('/records/create', checkAuthenticator, recordController.createRecord)
router.get('/records/:id/edit', checkAuthenticator, recordController.editRecordPage)
router.post('/records/:id/edit', checkAuthenticator, recordController.editRecord)
router.post('/records/:id/delete', checkAuthenticator, recordController.deleteRecord)
router.get('/records/filter', checkAuthenticator, recordController.filterRecord)
router.get('/records/month', checkAuthenticator, recordController.monthRecord)

// users
router.get('/users/login', userController.loginPage, checkNotAuthenticated)
router.post('/users/login', checkAccount, userController.login)
router.get('/users/register', userController.registerPage)
router.post('/users/register', userController.register)
router.get('/users/logout', userController.logout)

// facebook
router.get('/auth/facebook', checkNotAuthenticated, facebookController.facebookAuthenticator)
router.get('/auth/facebook/callback', checkNotAuthenticated, facebookController.facebookCallback)

// google
router.get('/auth/google', checkNotAuthenticated, googleController.googleAuthenticator)
router.get('/auth/google/callback', checkNotAuthenticated, googleController.googleCallback)

module.exports = router
