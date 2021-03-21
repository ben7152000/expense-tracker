// modules
const express = require('express')
const router = express.Router()

// controller
const userController = require('../controllers/userController')
const recordController = require('../controllers/recordController')
const facebookController = require('../controllers/facebookController')

// middleware
const { checkAuthenticator, checkNotAuthenticated } = require('../middlewares/auth')

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

// users
router.get('/users/login', checkNotAuthenticated, userController.loginPage)
router.post('/users/login', checkNotAuthenticated, userController.login)
router.get('/users/register', checkNotAuthenticated, userController.registerPage)
router.post('/users/register', checkNotAuthenticated, userController.register)
router.get('/users/logout', userController.logout)

// facebook
router.get('/auth/facebook', checkNotAuthenticated, facebookController.facebookAuthenticator)
router.get('/auth/facebook/callback', checkNotAuthenticated, facebookController.facebookCallback)

module.exports = router
