const mongoose = require('mongoose')

const subcategorySchema = new mongoose.Schema({
  name: { type: String }
})

const categorySchema = new mongoose.Schema({
  name: { type: String },
  subcategories: [
    { type: subcategorySchema }
  ]
})

module.exports = mongoose.model('Category', categorySchema)
