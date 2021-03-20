// record schema
const Record = require('../models/record')

// record control
const recordController = {

  // 取得所有紀錄
  getRecords: (req, res) => {
    res.send('all records')
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
