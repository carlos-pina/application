const JobController = require('./controllers/Job')

module.exports = (app) => {
  app.get('/jobs', JobController.getJobs)
  app.get('/jobs/:jobId', JobController.getJob)
  app.post('/jobs', JobController.setJob)
}
