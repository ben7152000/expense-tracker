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
    res.send('create record')
  },

  // 建立紀錄資料
  createRecord: (req, res) => {

  },

  // 編輯紀錄頁面
  editRecordPage: (req, res) => {
    res.send('edit record')
  },

  // 編輯紀錄資料
  editRecord: (req, res) => {

  },

  // 刪除紀錄
  deleteRecord: (req, res) => {

  }
}

module.exports = recordController
