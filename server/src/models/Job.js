const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  category: { type: String },
  subcategory: { type: String },
  summary: { type: String },
  description: { type: String },
  deadline: { type: String },
  city: { type: String },
  updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Job', jobSchema)
