// schema
const Record = require('../models/record')
const Category = require('../models/category')

// record control
const recordController = {

  // 取得所有紀錄
  getRecords: async (req, res) => {
    try {
      let totalAmount = 0
      const userId = req.user._id
      const categories = await Category.find().lean().exec()
      const records = await Record.find({ userId }).lean().exec()
      for (const record of records) {
        totalAmount += record.amount
        for (const icon of categories) {
          if (icon.name === record.category) {
            record.categoryIcon = icon.icon
          }
        }
      }
      res.render('../views/records/index', { totalAmount, records })
    } catch (e) {
      console.log(e)
      res.render('../views/error/index')
    }
  },

  // 建立紀錄頁面
  createRecordPage: (req, res) => {
    res.render('../views/records/create')
  },

  // 建立紀錄資料
  createRecord: async (req, res) => {
    const userId = req.user._id
    const { Name, Date, Category, Amount } = req.body
    const [category, categoryIcon] = Category.split('/')
    try {
      await Record.create({
        name: Name,
        date: Date,
        category,
        categoryIcon,
        amount: Number(Amount),
        userId
      })
      res.redirect('/records')
    } catch (e) {
      console.log(e)
      res.render('../views/error/index')
    }
  },

  // 編輯紀錄頁面
  editRecordPage: async (req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    try {
      const record = await Record.findOne({ userId, _id }).lean().exec()
      res.render('../views/records/edit', { record })
    } catch (e) {
      console.log(e)
      res.render('../views/error/index')
    }
  },

  // 編輯紀錄資料
  editRecord: async (req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    const { Name, Date, Category, Amount } = req.body
    const [category, categoryIcon] = Category.split('/')
    try {
      const record = await Record.findOne({ userId, _id })
      record.name = Name
      record.date = Date
      record.category = category
      record.categoryIcon = categoryIcon
      record.amount = Amount
      record.save()
      res.redirect('/records')
    } catch (e) {
      console.log(e)
      res.render('../views/error/index')
    }
  },

  // 刪除紀錄
  deleteRecord: async (req, res) => {
    const userId = req.user._id
    const _id = req.params.id
    try {
      const record = await Record.findOne({ userId, _id })
      record.remove()
      res.redirect('/records')
    } catch (e) {
      console.log(e)
      res.render('../views/error/index')
    }
  }
}

module.exports = recordController
