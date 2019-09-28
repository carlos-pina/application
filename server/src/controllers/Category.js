const Category = require('../models/Category')

module.exports = {
  getCategories (req, res) {
    Category.find().then(categories => {
      res.send(categories)
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
  }
}
