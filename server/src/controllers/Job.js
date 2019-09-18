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
  getJob (req, res) {
    Job.findById(req.params.jobId).then(job => {
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

    job.save().then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
  }
}
