const Job = require('../models/Job')

module.exports = {
  getJobs (req, res) {
    Job.find().then(jobs => {
      res.send(jobs)
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
  },
  getJobById (req, res) {
    Job.findById(req.params.jobId).then(job => {
      res.send(job)
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
  },
  getJobBySubCategory (req, res) {
    Job.find({
      subcategory: req.params.subcategoryId
    }).then(job => {
      res.send(job)
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
  },
  setJob (req, res) {
    const job = new Job({
      category: req.body.category,
      subcategory: req.body.subcategory,
      summary: req.body.summary,
      description: req.body.description,
      deadline: req.body.deadline,
      city: req.body.city
    })

    job.save().then(job => {
      res.send(job)
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
  },
  putJob (req, res) {
    Job.findById(req.body._id).then(job => {
      job.category = req.body.category
      job.subcategory = req.body.subcategory
      job.summary = req.body.summary
      job.description = req.body.description
      job.deadline = req.body.deadline
      job.city = req.body.city
      job.save().then(() => {
        res.send(job)
      })
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
  },
  deleteJob (req, res) {
    Job.findByIdAndDelete(req.params.jobId).then(() => {
      res.send()
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
  }
}
