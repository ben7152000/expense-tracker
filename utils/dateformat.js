const { format } = require('date-fns')

const dateFormat = date => {
  return format(new Date(date), 'MM')
}

module.exports = { dateFormat }
