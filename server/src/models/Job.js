const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  category: { type: String },
  subcategory: { type: String },
  summary: { type: String },
  description: { type: String },
  deadline: { type: Date },
  city: { type: String },
  updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Job', jobSchema)
